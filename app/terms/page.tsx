import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Make Money Save Time',
  description: 'Terms of Service for Make Money Save Time - Read our terms and conditions for using our website and services.',
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">
            <h1 className="text-4xl font-bold font-serif mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: December 9, 2024</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Make Money Save Time (&quot;the Website&quot;), you accept and agree
              to be bound by these Terms of Service. If you do not agree to these terms, please
              do not use our Website.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Make Money Save Time provides educational content, articles, and resources related
              to personal finance, income generation, and time management strategies. Our content
              is for informational purposes only.
            </p>

            <h2>3. Disclaimer of Financial Advice</h2>
            <p>
              <strong>Important:</strong> The content on this Website is for educational and informational
              purposes only. It is not intended as, and should not be construed as, financial,
              investment, legal, or professional advice.
            </p>
            <ul>
              <li>We are not licensed financial advisors, attorneys, or certified professionals</li>
              <li>Always consult qualified professionals before making financial decisions</li>
              <li>Past results or examples mentioned do not guarantee future outcomes</li>
              <li>Individual results will vary based on numerous factors</li>
            </ul>

            <h2>4. No Guarantees</h2>
            <p>
              We make no representations or warranties about the accuracy, reliability, completeness,
              or timeliness of any content. Any reliance you place on such information is strictly
              at your own risk.
            </p>
            <ul>
              <li>We do not guarantee any specific financial results or outcomes</li>
              <li>Success depends on individual effort, circumstances, and market conditions</li>
              <li>Testimonials and examples are illustrative and not typical results</li>
            </ul>

            <h2>5. User Conduct</h2>
            <p>When using our Website, you agree not to:</p>
            <ul>
              <li>Use the Website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the Website</li>
              <li>Interfere with or disrupt the Website&apos;s functionality</li>
              <li>Copy, reproduce, or distribute our content without permission</li>
              <li>Use automated systems to scrape or collect data from the Website</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              All content on this Website, including text, graphics, logos, and images, is the
              property of Make Money Save Time or its content creators and is protected by
              copyright and intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from any
              content without our express written permission.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              Our Website may contain links to third-party websites or services. We are not
              responsible for the content, privacy policies, or practices of any third-party
              sites. Use of linked sites is at your own risk.
            </p>

            <h2>8. Affiliate Disclosure</h2>
            <p>
              Some links on our Website may be affiliate links. This means we may earn a commission
              if you click through and make a purchase. This comes at no additional cost to you
              and helps support our content.
            </p>

            <h2>9. Newsletter and Communications</h2>
            <p>
              By subscribing to our newsletter, you consent to receive periodic emails from us.
              You may unsubscribe at any time using the link provided in each email.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Make Money Save Time and its owners,
              operators, and contributors shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use of the Website
              or reliance on any content.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Make Money Save Time and its affiliates
              from any claims, damages, or expenses arising from your use of the Website or
              violation of these Terms.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective
              immediately upon posting to the Website. Your continued use of the Website after
              changes constitutes acceptance of the modified Terms.
            </p>

            <h2>13. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of
              the United States, without regard to conflict of law principles.
            </p>

            <h2>14. Contact Information</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <p>
              Email: legal@makemoneysavetime.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
