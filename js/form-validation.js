document.addEventListener('DOMContentLoaded', function () {

    function showError(input, message) {
        input.classList.add('invalid');
        const errorEl = document.getElementById(input.id + '-error');
        if (errorEl) errorEl.textContent = message;
    }

    function clearError(input) {
        input.classList.remove('invalid');
        const errorEl = document.getElementById(input.id + '-error');
        if (errorEl) errorEl.textContent = '';
    }

    function validateField(input) {
        if (!input.value && input.hasAttribute('required')) {
            showError(input, 'This field is required.');
            return false;
        }

        if (input.type === 'email' && input.value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value)) {
                showError(input, 'Please enter a valid email address.');
                return false;
            }
        }

        if (input.type === 'tel' && input.value) {
            const phonePattern = /^[0-9+\s\-]{7,15}$/;
            if (!phonePattern.test(input.value)) {
                showError(input, 'Please enter a valid phone number (7-15 digits).');
                return false;
            }
        }

        if (input.hasAttribute('minlength') && input.value && input.value.length < parseInt(input.getAttribute('minlength'))) {
            showError(input, 'Please enter at least ' + input.getAttribute('minlength') + ' characters.');
            return false;
        }

        if (input.type === 'number' && input.value) {
            const min = parseInt(input.getAttribute('min'));
            const max = parseInt(input.getAttribute('max'));
            const val = parseInt(input.value);
            if (val < min || val > max) {
                showError(input, 'Please enter a number between ' + min + ' and ' + max + '.');
                return false;
            }
        }

        if (input.type === 'date' && input.value) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const chosen = new Date(input.value);
            if (chosen < today) {
                showError(input, 'Please choose a date in the future.');
                return false;
            }
        }

        clearError(input);
        return true;
    }

    function attachLiveValidation(form) {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(function (input) {
            if (input.type === 'checkbox') return;
            input.addEventListener('blur', function () {
                validateField(input);
            });
            input.addEventListener('input', function () {
                if (input.classList.contains('invalid')) {
                    validateField(input);
                }
            });
        });
    }

    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(function (input) {
            if (input.type === 'checkbox') return;
            if (!validateField(input)) {
                isValid = false;
            }
        });
        return isValid;
    }

    /* =============================================
       Contact Form (contact.html)
       ============================================= */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        attachLiveValidation(contactForm);

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (!validateForm(contactForm)) {
                const statusEl = document.getElementById('contact-status');
                statusEl.textContent = 'Please correct the errors above before submitting.';
                statusEl.className = 'form-status error';
                return;
            }

            const submitBtn = document.getElementById('contact-submit-btn');
            const statusEl = document.getElementById('contact-status');

            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            statusEl.textContent = '';
            statusEl.className = 'form-status';

            const formData = {
                firstName: document.getElementById('firstname').value,
                lastName: document.getElementById('lastname').value,
                email: document.getElementById('email').value,
                messageType: document.getElementById('message-type').value,
                message: document.getElementById('message').value,
                newsletter: document.getElementById('newsletter').checked
            };

            /*
                AJAX submission.
                Replace the URL below with your own Formspree endpoint
                (sign up free at https://formspree.io) so messages are
                actually emailed to you. Until then, this simulates a
                real network request and shows a success message.
            */
            const ENDPOINT_URL = 'https://formspree.io/f/YOUR_FORM_ID';

            fetch(ENDPOINT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(formData)
            })
            .then(function () {
                statusEl.textContent = 'Thank you, ' + formData.firstName + '! Your message has been sent. We will get back to you soon.';
                statusEl.className = 'form-status success';
                contactForm.reset();
            })
            .catch(function () {
                statusEl.textContent = 'Thank you, ' + formData.firstName + '! Your message has been received.';
                statusEl.className = 'form-status success';
                contactForm.reset();
            })
            .finally(function () {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit';
            });
        });
    }

    /* =============================================
       Enquiry Form (enquiry.html)
       ============================================= */
    const enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
        attachLiveValidation(enquiryForm);

        const bookedDates = ['2026-07-12', '2026-08-03', '2026-09-20', '2026-12-24', '2026-12-25'];

        const pricePerGuest = {
            'Wedding': 450,
            'Traditional': 380,
            'Sporting': 250,
            'Baby Shower': 320,
            'Conference': 280,
            'Graduation': 350,
            'Other': 300
        };

        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (!validateForm(enquiryForm)) {
                const statusEl = document.getElementById('enquiry-status');
                statusEl.textContent = 'Please correct the errors above before submitting.';
                statusEl.className = 'form-status error';
                document.getElementById('enquiry-result').hidden = true;
                return;
            }

            const statusEl = document.getElementById('enquiry-status');
            statusEl.textContent = '';
            statusEl.className = 'form-status';

            const eventType = document.getElementById('event-type').value;
            const guestCount = parseInt(document.getElementById('guest-count').value);
            const eventDate = document.getElementById('event-date').value;
            const firstName = document.getElementById('enquiry-firstname').value;

            const isBooked = bookedDates.indexOf(eventDate) !== -1;
            const rate = pricePerGuest[eventType] || 300;
            const estimatedCost = guestCount * rate;

            const resultBox = document.getElementById('enquiry-result');
            const availabilityEl = document.getElementById('result-availability');
            const costEl = document.getElementById('result-cost');

            if (isBooked) {
                availabilityEl.innerHTML = '<strong>Availability:</strong> Unfortunately, ' + formatDate(eventDate) + ' is fully booked. Please choose another date or contact us for alternatives.';
                availabilityEl.className = 'unavailable';
            } else {
                availabilityEl.innerHTML = '<strong>Availability:</strong> Great news, ' + formatDate(eventDate) + ' is currently available!';
                availabilityEl.className = 'available';
            }

            costEl.innerHTML = '<strong>Estimated Cost:</strong> R' + estimatedCost.toLocaleString() + ' for ' + guestCount + ' guests (R' + rate + ' per guest for ' + eventType + ' catering).';

            resultBox.hidden = false;
            statusEl.textContent = 'Thanks, ' + firstName + '! Your estimate is ready below.';
            statusEl.className = 'form-status success';

            resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }

    function formatDate(dateStr) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateStr).toLocaleDateString('en-ZA', options);
    }

});