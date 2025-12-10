import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Make Money Save Time',
  description: 'Privacy Policy for Make Money Save Time - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">
            <h1 className="text-4xl font-bold font-serif mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: December 9, 2024</p>

            <h2>1. Introduction</h2>
            <p>
              Make Money Save Time (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website makemoneysavetime.com.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>Information You Provide</h3>
            <p>We may collect information you voluntarily provide, including:</p>
            <ul>
              <li>Email address (when subscribing to our newsletter)</li>
              <li>Name (when provided through contact forms)</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our site, we may automatically collect:</p>
            <ul>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
              <li>IP address (anonymized)</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Send you our newsletter and updates (with your consent)</li>
              <li>Respond to your inquiries and communications</li>
              <li>Improve our website and content</li>
              <li>Analyze usage patterns and trends</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>

            <h2>4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience. You can control
              cookies through your browser settings. Essential cookies are necessary for the site
              to function properly.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>We may use third-party services that collect information, including:</p>
            <ul>
              <li>Analytics providers (to understand site usage)</li>
              <li>Email service providers (to send newsletters)</li>
              <li>Hosting providers (to serve our website)</li>
            </ul>
            <p>
              These third parties have their own privacy policies governing how they use such information.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information.
              However, no method of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>

            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>

            <h2>8. Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: privacy@makemoneysavetime.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
