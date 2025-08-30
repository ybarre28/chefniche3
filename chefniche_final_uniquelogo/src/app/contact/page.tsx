import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Contact ChefNiche</h1>
      <p className="text-gray-600 mb-6">Questions about an order or product? Send us a message below.</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <Input placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input type="email" placeholder="you@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <Textarea rows={6} placeholder="How can we help?" />
        </div>
        <Button type="button">Send</Button>
      </form>
    </main>
  );
}
