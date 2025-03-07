import { ScrollArea } from "@/components/ui/scroll-area";
import { Logo } from "@/components/Logo";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <Logo className="w-24 h-24 mb-4" />
          <h1 className="text-4xl font-bold text-primary mb-2">Terms of Service</h1>
          <p className="text-muted-foreground">Last modified: December 19, 2023</p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <ScrollArea className="h-[calc(100vh-300px)] pr-4">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>a. These Terms & Conditions are between Sup? Chats & Events (the "Company", "we", "us", or "our") and you ("you", "your", or "yourself").</p>
                    <p>b. We are proud to provide online personals services for single adults to meet each other.</p>
                    <p>c. These Terms & Conditions, combined with our Privacy Policy, form a legally binding Agreement between you and us ("Agreement").</p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>In these Terms & Conditions:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>"Apps" refers to each and all of the Mobile Apps, Desktop Apps, and Web Apps.</li>
                      <li>"Member" means any person whose Membership has been accepted by the Company.</li>
                      <li>"Services" means any and all services provided by the Company by any means.</li>
                      <li>"User" means any Member and/or Visitor.</li>
                    </ul>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Your Privacy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>a. We explain what we do and don't do with your data in our Privacy Policy.</p>
                    <p>b. We do not always encrypt your messages, and we reserve the right to monitor those messages and other content for compliance with our Terms & Conditions.</p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Accounts and Security</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>a. To access the Services, you must have an account.</p>
                    <p>b. You must maintain the confidentiality of your login and password.</p>
                    <p>c. You may not use our Services if:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>You are under the age of 18</li>
                      <li>You have ever been convicted of a violent or sexually related criminal offense</li>
                      <li>You have previously been banned from using our Services</li>
                    </ul>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Code of Conduct</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Each User undertakes to comply strictly with all applicable laws and regulations, and must refrain from:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Discrimination of any kind</li>
                      <li>Using the Services for commercial purposes</li>
                      <li>Engaging in illegal activities</li>
                      <li>Posting inappropriate or offensive content</li>
                      <li>Sharing personal information of other users without consent</li>
                    </ul>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Paid Features</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>You may purchase a paid Membership for one or more of our products. All prices include relevant local taxes.</p>
                    <p>Premium membership benefits include:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Daily Instant Chats (expire each day if not used)</li>
                      <li>One free Profile Boost per week</li>
                    </ul>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">7. Cancellation</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Cancellation must take place according to the relevant methods employed by Google Play, Apple App Stores and Stripe.</p>
                    <p>If we cancel your Membership for breach of Terms, you shall not be entitled to a refund.</p>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">8. Technology Requirements</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>a. Your technology must meet our minimum specifications.</p>
                    <p>b. We may require you to download and install updates.</p>
                    <p>c. We have no obligation to:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Make subsequent versions available</li>
                      <li>Continue supporting current versions</li>
                      <li>Maintain continuous access</li>
                    </ul>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>All intellectual property rights in our Services are owned by or licensed to the Company.</p>
                    <p>You may not:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Remove proprietary notices</li>
                      <li>Modify or create derivative works</li>
                      <li>Redistribute content without permission</li>
                    </ul>
                  </div>
                </section>

                <Separator />

                <section>
                  <h2 className="text-2xl font-semibold mb-4">10. Disclaimer of Warranties</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>The Services are provided "as is" and "as available" without warranties of any kind.</p>
                    <p>We do not guarantee:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Uninterrupted access</li>
                      <li>Error-free operation</li>
                      <li>Security from viruses or harmful components</li>
                    </ul>
                  </div>
                </section>

              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}