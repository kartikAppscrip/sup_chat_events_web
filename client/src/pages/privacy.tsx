import { ScrollArea } from "@/components/ui/scroll-area";
import { Logo } from "@/components/Logo";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <Logo className="w-24 h-24 mb-4" />
          <h1 className="text-4xl font-bold text-primary mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <ScrollArea className="h-[calc(100vh-300px)] pr-4">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground">
                    We may collect Personal Information, including Sensitive Data, and other information. "Personal Information" means individually identifiable information that would allow us to determine the actual identity of, and contact, a specific living person. Sensitive Data includes information, comments or content (e.g. photographs, video, profile, lifestyle) that you optionally provide that may reveal your ethnic origin, nationality, religion and/or sexual orientation. By providing Sensitive Data to us, you consent to the collection, use and disclosure of Sensitive Data as permitted by applicable privacy laws.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Registration Information</h2>
                  <p className="text-muted-foreground">
                    In order to register as a user with Sup? Chats & Events, you will be asked to sign in using your Facebook login or email address. If you sign in using Facebook, you authorize us to access certain Facebook account information, such as your public Facebook profile (consistent with your privacy settings in Facebook), your email address, interests, likes, gender, birthday, education history, relationship interests, current city, photos, personal description, and friend list.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Types of Data</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Identity Data</h3>
                      <p className="text-muted-foreground">
                        The registration form must be completed to access the Services. Your email address and phone number shall not be visible or available to the public.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Location Data</h3>
                      <p className="text-muted-foreground">
                        The primary function and goal is to enable users to find people nearby, to facilitate virtual or real life meet ups. You will be asked for permission to collect and process your geolocation.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Mobile Data</h3>
                      <p className="text-muted-foreground">
                        When you use the Application, we collect server logs which may include information such as IP addresses, operating systems or application crashes.
                      </p>
                    </div>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Use of Technologies</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We use various technologies to collect information from your device and about your activities on our Service:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Automatically collected information from your browser or device</li>
                      <li>Cookies and similar technologies for personalization</li>
                      <li>Pixel tags for tracking user activities and measuring feature popularity</li>
                      <li>Mobile device IDs and advertising IDs</li>
                    </ul>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. How We Use Information</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Deliver and improve our products and services</li>
                    <li>Manage your account and provide customer support</li>
                    <li>Perform research and analysis about your use of our services</li>
                    <li>Communicate with you about products or services</li>
                    <li>Develop and display content tailored to your interests</li>
                    <li>Website or mobile application analytics</li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Information Sharing</h2>
                  <p className="text-muted-foreground">
                    We do not share your personal information with others except as indicated in this Privacy Policy or when we inform you and give you an opportunity to opt out. We may share information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-4 text-muted-foreground">
                    <li>Service providers performing services on our behalf</li>
                    <li>Law enforcement when required by law</li>
                    <li>Other Sup? Chats & Events group businesses</li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      If you delete your account:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Data is retained for 3 years for analytical purposes</li>
                      <li>Your profile and photos are immediately taken offline</li>
                      <li>After 3 years, personally identifiable information is permanently deleted</li>
                      <li>Block history is maintained to prevent harassment</li>
                    </ul>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Security</h2>
                  <p className="text-muted-foreground">
                    We take security measures to help safeguard your personal information from unauthorized access and disclosure. However, no system can be completely secure. You should exercise caution with how you handle and disclose your personal information.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. International Data Transfer</h2>
                  <p className="text-muted-foreground">
                    We are a growing corporation with users and operations in multiple countries. While our primary data centers are in the United States, we may transfer personal information to our offices outside of the United States. By providing your personal information, you consent to any transfer and processing in accordance with this Policy.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    Although our Service is a general audience Service, we restrict the use of our service to individuals age 18 and above. We do not knowingly collect, maintain, or use personal information from children under the age of 18.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">11. Changes to Privacy Policy</h2>
                  <p className="text-muted-foreground">
                    We will occasionally update this Privacy Policy to reflect changes in law, data collection and use practices, Service features, or technology advances. When we post changes, we will revise the "last updated" date at the top. Your continued use of the Services following the posting of changes means you accept those changes.
                  </p>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy or our practices, please contact us at privacy@supchats.com
                  </p>
                </section>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}