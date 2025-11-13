<template>
  <div class="protection-plan-page">
    <div class="main-container">
      <!-- Header Section -->
      <header class="header-section">
        <h1>ELEHEAR Beyond</h1>
        <h2>1-Year Protection Plan</h2>
        <p>
          Protect your Beyond hearing aids against accidental damage or loss with the ELEHEAR Protection Plan.
        </p>
        <p>
          One-time coverage for unexpected events not included in your standard warranty.
        </p>
        <div class="compatible-model">
          <p><strong>Compatible Model:</strong></p>
          <p>ELEHEAR Beyond Hearing Aids Only</p>
        </div>
      </header>

      <!-- Warning Note Section -->
      <div class="warning-note">
        <img :src="warning" alt="Warning Icon" class="warning-icon" loading="lazy">
        <p>
          Please note that this protection plan is non-refundable once purchased. The Plan is non-transferable and cannot be resold.
        </p>
      </div>

      <!-- What's Included Section -->
      <section class="included-section">
        <h3>What's Included:</h3>
        <div class="included-item">
          <div class="item-title">
            <span class="item-number">1</span>
            <h4>Accidental Damage Protection</h4>
          </div>
          <p class="item-description">
            One-time 100% component replacement for accidental damage. Covered components include one hearing aid unit, single or dual receiver wires, charging case, wax guards, and ear domes.
          </p>
          <img :src="step1" alt="Accidental Damage Protection Items" class="protection-image" loading="lazy">
        </div>

        <div class="included-item">
          <div class="item-title">
            <span class="item-number">2</span>
            <h4>Loss or Theft Protection</h4>
          </div>
          <p class="item-description">
            If your Beyond product gets stolen or lost, you'll have one-time opportunity to replace them at the greatly reduced cost of only $149.
          </p>
            <img :src="step2" alt="Loss or Theft Protection Items" class="protection-image" loading="lazy">
        </div>
      </section>

      <!-- How It Works Section -->
      <section class="how-it-works-section">
        <h3>How It Works</h3>
        <div class="steps-container">
          <div class="step-card">
            <div class="step-label">Step 1</div>
            <div class="step-icon-wrapper">
              <!-- Local SVG image for step 1 -->
              <img :src="workStep1" alt="step 1" class="step-icon" />
            </div>
            <p class="step-title"><strong>Purchase</strong></p>
            <p class="step-description">Your Protection Plan begins immediately on the purchase date.</p>
          </div>

          <div class="step-card">
            <div class="step-label">Step 2</div>
            <div class="step-icon-wrapper">
              <!-- SVG for Headphones/Support Icon -->
              <img :src="workStep2" alt="step 2" class="step-icon" />
            </div>
            <p class="step-title"><strong>Contact Support</strong></p>
            <p class="step-description">If an accident or loss occurs, contact ELEHEAR Customer Support to initiate a claim.</p>
          </div>

          <div class="step-card">
            <div class="step-label">Step 3</div>
            <div class="step-icon-wrapper">
              <!-- SVG for Smartphone/Confirmation Icon -->
              <img :src="workStep3" alt="step 3" class="step-icon" />
            </div>
            <p class="step-title"><strong>Confirm Your Benefits</strong></p>
            <p class="step-description">Our customer service team will assist you in consuming your benefits.</p>
          </div>
        </div>
      </section>

      <!-- Footer Links -->
      <footer class="footer-links">
        <!-- External link: opens in new tab with safe rel attributes -->
        <a class="link-item" href="https://elehear.com/pages/contact-us" target="_blank" rel="noopener noreferrer">
          <span>Contact Us</span>
          <span class="chevron">&gt;</span>
        </a>
        <a class="link-item" href="https://elehear.com/policies/terms-of-service" target="_blank" rel="noopener noreferrer">
          <span>Terms of Service Apply</span>
          <span class="chevron">&gt;</span>
        </a>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore: allow importing SVGs without type declarations
import step1 from './images/protection-accident.svg'
// @ts-ignore: allow importing SVGs without type declarations
import step2 from './images/protection-loss.svg'
// @ts-ignore: allow importing SVGs without type declarations
import workStep1 from './images/icon-work-step1.svg'
// @ts-ignore: allow importing SVGs without type declarations
import workStep2 from './images/icon-work-step2.svg'
// @ts-ignore: allow importing SVGs without type declarations
import workStep3 from './images/icon-work-step3.svg'
// @ts-ignore: allow importing SVGs without type declarations
import warning from './images/icon-warning.svg'
</script>

<style scoped>
/* General Styles */
.protection-plan-page {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  color: #333;
}

.main-container {
  max-width: 800px;
  width: 100%;
  background-color: #f8f9fa;
  padding: 24px;
  box-sizing: border-box;
}

h1, h2, h3, h4, p {
  margin: 0;
}

/* Header Section */
.header-section {
  text-align: left;
  padding-bottom: 24px;
}

.header-section h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 4px;
}

.header-section h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 16px;
}

.header-section p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 16px;
}

.compatible-model {
  margin-top: 24px;
}

.compatible-model p {
    margin: 0;
    line-height: 1.4;
    font-size: 16px;
}

/* Warning Note Section */
.warning-note {
  display: flex;
  align-items: top;
  background-color: #fff4e5;
  border: 1px solid #ff9800;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 32px;
}

.warning-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  flex-shrink: 0;
}

.warning-note p {
  font-size: 15px;
  line-height: 1.6;
  color: #e65100;
}

/* What's Included Section */
.included-section h3 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}

.included-item {
  margin-bottom: 32px;
}

.item-title {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.item-number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: #333;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  font-size: 16px;
  margin-right: 12px;
}

.item-title h4 {
  font-size: 18px;
  font-weight: bold;
}

.item-description {
  font-size: 16px;
  line-height: 1.6;
  padding-left: 40px; /* Aligns with title text */
  margin-bottom: 20px;
}

/* MODIFICATION: Style for the new images */
.protection-image {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  display: block;
  border-radius: 24px; /* Optional: adds rounded corners like the placeholder had */
}


/* How It Works Section */
.how-it-works-section {
  margin-top: 40px;
  background-color: #f8f9fa;
  padding: 24px;
  margin-left: -24px;
  margin-right: -24px;
}

.how-it-works-section h3 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 24px;
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.step-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 24px;
  text-align: center;
  position: relative;
}

.step-label {
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
}

.step-icon-wrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    /* background-color: #f44336; */
    border-radius: 16px;
    margin-bottom: 12px;
    color: #fff;
}

.step-icon-wrapper svg {
    width: 40px;
    height: 40px;
}

.step-icon {
  width: 40px;
  height: 40px;
  display: block;
}

.step-title {
  font-size: 18px;
  margin-bottom: 8px;
}

.step-description {
  font-size: 15px;
  line-height: 1.5;
  color: #666;
  text-align: left;

}

/* Footer Links */
.footer-links {
  margin-top: 32px;
}

.link-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  /* Remove underline and force black color for link items (works for <a class="link-item">) */
  text-decoration: none;
  color: #191919;
}

.link-item:first-child {
    border-top: 1px solid #eee;
}

.chevron {
  font-size: 20px;
  color: #ccc;
}
</style>