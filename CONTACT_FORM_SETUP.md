# Contact Form Setup Guide

This guide explains how to integrate the contact form with Web3Forms (free, unlimited submissions) or Formspree.

## Option A: Web3Forms (Recommended - Free & Unlimited)

Web3Forms is completely free with unlimited form submissions and no signup required for basic usage.

### Step 1: Get Your Access Key

1. Visit https://web3forms.com/
2. Enter your email address (info@panamahealth.ai)
3. Click "Create Access Key"
4. Check your email for the access key
5. Save this key - you'll need it in Step 2

### Step 2: Update the Form Component

Edit the file: `src/components/ui/Form.astro`

**Find this line:**
```astro
<form>
```

**Replace it with:**
```astro
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
  <input type="hidden" name="subject" value="New Pilot Program Inquiry from PanamaHealth" />
  <input type="hidden" name="from_name" value="PanamaHealth Contact Form" />
  <input type="hidden" name="redirect" value="https://panamahealth.github.io/thank-you" />
```

**Important:** Replace `YOUR_ACCESS_KEY_HERE` with the access key you received from Web3Forms.

### Step 3: Create a Thank You Page (Optional but Recommended)

Create a new file: `src/pages/thank-you.astro`

```astro
---
import Layout from '~/layouts/PageLayout.astro';
import HeroText from '~/components/widgets/HeroText.astro';

const metadata = {
  title: 'Thank You - PanamaHealth',
};
---

<Layout metadata={metadata}>
  <HeroText
    tagline="Thank You"
    title="We've received your message!"
  >
    <Fragment slot="subtitle">
      <p class="text-xl text-muted mb-6">
        Thank you for your interest in PanamaHealth's federated learning platform.
      </p>
      <p class="text-lg text-muted mb-6">
        Our team will review your information and get back to you within 1-2 business days
        to discuss your pilot program application.
      </p>
      <p class="text-lg text-muted">
        In the meantime, feel free to explore our <a href="/" class="text-primary hover:underline">homepage</a>
        to learn more about how we're transforming healthcare AI.
      </p>
    </Fragment>
  </HeroText>
</Layout>
```

### Step 4: Test Your Form

1. Build and run your site locally: `npm run dev`
2. Navigate to http://localhost:4321/contact
3. Fill out the form with test data
4. Submit the form
5. Check your email (info@panamahealth.ai) for the form submission

### Step 5: Customize Email Notifications (Optional)

You can customize how Web3Forms sends you emails by adding hidden fields to the form:

```html
<!-- Add these hidden fields for customization -->
<input type="hidden" name="replyto" value="info@panamahealth.ai" />
<input type="checkbox" name="botcheck" style="display: none;" />
```

The `botcheck` field is a honeypot to prevent spam bots.

---

## Option B: Formspree (Alternative - Free 50 submissions/month)

If you prefer Formspree, follow these steps:

### Step 1: Create a Formspree Account

1. Visit https://formspree.io/
2. Sign up with your email (info@panamahealth.ai)
3. Create a new form
4. Copy the form endpoint URL (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

### Step 2: Update the Form Component

Edit `src/components/ui/Form.astro`:

**Find:**
```astro
<form>
```

**Replace with:**
```astro
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with your actual Formspree form ID.

### Step 3: Test

Same testing process as Web3Forms.

---

## Option C: Calendly Integration (Alternative - Scheduling)

If you prefer to schedule calls instead of using a form:

### Step 1: Create a Calendly Account

1. Visit https://calendly.com/
2. Sign up for a free account
3. Set up your availability
4. Copy your scheduling link

### Step 2: Update the Contact Page

Replace the contact form section in `src/pages/contact.astro` with:

```astro
<div class="max-w-4xl mx-auto px-4 py-16">
  <h2 class="text-3xl font-bold text-center mb-8">Schedule a Demo Call</h2>

  <!-- Calendly inline widget begin -->
  <div class="calendly-inline-widget" data-url="YOUR_CALENDLY_LINK_HERE" style="min-width:320px;height:700px;"></div>
  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
  <!-- Calendly inline widget end -->
</div>
```

Replace `YOUR_CALENDLY_LINK_HERE` with your Calendly scheduling link.

---

## Verification Checklist

After setting up your form, verify these items:

- [ ] Form submissions are received at info@panamahealth.ai
- [ ] Thank you page displays after submission
- [ ] All form fields are captured correctly:
  - Name
  - Email
  - Organization
  - Role
  - Message
- [ ] Form validation works (required fields)
- [ ] No spam submissions (consider adding reCAPTCHA if needed)
- [ ] Mobile responsive form layout
- [ ] Form loads quickly (<2 seconds)

---

## Troubleshooting

### Form submissions not received

**Check:**
1. Access key is correctly inserted in the form
2. Email address is correct (info@panamahealth.ai)
3. Form has `method="POST"` attribute
4. Form has correct `action` URL

### Redirect not working

**Check:**
1. Thank you page exists at `/thank-you`
2. Redirect URL in hidden field is correct
3. Thank you page builds correctly (`npm run build`)

### Spam issues

**Solutions:**
1. Add honeypot field (botcheck)
2. Add reCAPTCHA (Web3Forms supports this)
3. Add email verification
4. Monitor submissions and block IPs if needed

---

## Advanced Features

### Add reCAPTCHA (Recommended for Production)

1. Get reCAPTCHA keys from https://www.google.com/recaptcha/admin
2. Add to form:

```html
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
```

3. Update form to verify reCAPTCHA on backend

### File Attachments

Web3Forms supports file attachments up to 5MB. Add to form:

```html
<input type="file" name="attachment" accept=".pdf,.doc,.docx" />
```

### Custom Success Message

Instead of redirecting, show a success message on the same page using JavaScript:

```javascript
<script>
  const form = document.querySelector('form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      alert('Thank you! We will be in touch soon.');
      form.reset();
    }
  });
</script>
```

---

## Next Steps

1. Choose your preferred form service (Web3Forms recommended)
2. Get your API key/access key
3. Update the Form component with the key
4. Create thank you page
5. Test thoroughly
6. Monitor submissions
7. Respond to pilot inquiries promptly!

---

## Support

- **Web3Forms Documentation:** https://docs.web3forms.com/
- **Formspree Documentation:** https://help.formspree.io/
- **Calendly Help:** https://help.calendly.com/

For issues with the PanamaHealth website form integration, check the Astro documentation or the AstroWind template documentation.
