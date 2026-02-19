import { Component, signal, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { CommonModule } from '@angular/common';

type LoginStep = 'phone' | 'otp';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  // Using inject() pattern for cleaner constructor
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  loginForm: FormGroup = this.fb.group({
    phone_number: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
    otp: ['']
  });

  errorMessage = signal<string>('');
  helperMessage = signal<string>('');
  step = signal<LoginStep>('phone');
  isLoading = signal<boolean>(false);
  otpExpiresAt = signal<string | null>(null);

  onSubmit() {
    if (!this.loginForm.valid) return;
    this.errorMessage.set('');
    this.helperMessage.set('');

    if (this.step() === 'phone') {
      this.requestOtp();
    } else {
      this.verifyOtp();
    }
  }

  requestOtp() {
    const { phone_number } = this.loginForm.value;
    this.isLoading.set(true);
    this.authService.requestOtp(phone_number).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        if (response.status) {
          this.step.set('otp');
          this.otpExpiresAt.set(response.data?.expires_at ?? null);
          this.loginForm.get('otp')?.reset();
          this.loginForm.get('otp')?.setValidators([Validators.required, Validators.minLength(6)]);
          this.loginForm.get('otp')?.updateValueAndValidity();
          this.loginForm.get('otp')?.setValue(response.data?.otp ?? '');
          this.helperMessage.set(
            response.data?.is_new_user
              ? 'Account created. OTP sent to your phone. Enter the 6-digit code.'
              : 'OTP sent to your phone. Enter the 6-digit code.'
          );
        } else {
          this.errorMessage.set(response.message || 'Unable to send OTP.');
        }
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err?.error?.message || 'Unable to send OTP.');
      }
    });
  }

  verifyOtp() {
    const { phone_number, otp } = this.loginForm.value;
    this.isLoading.set(true);
    this.authService.verifyOtp(phone_number, otp).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        if (!response.status) {
          this.errorMessage.set(response.message || 'Invalid OTP.');
        }
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err?.error?.message || 'Invalid OTP.');
      }
    });
  }
}
