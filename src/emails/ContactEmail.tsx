import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

export default function ContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  const sanitizedMessage = message.replace(/\n/g, "<br />");

  return (
    <Html>
      <Head />
      <Preview>New inquiry from {name}</Preview>
      <Tailwind>
        <Body className="m-0 bg-background py-10 font-sans text-foreground">
          <Container className="mx-auto w-full max-w-155 rounded-2xl border border-border bg-surface px-8 py-8">
            <Section className="mb-8">
              <Text className="m-0 text-xs uppercase tracking-[0.24em] text-[#08ffe6]">
                Innovative Explorer
              </Text>
              <Heading className="mb-2 mt-3 text-[28px] leading-[1.2] text-foreground">
                Lithira Jayanaka
              </Heading>
              <Text className="m-0 text-sm text-[#9aa5b1]">
                Crafting Intelligent Innovation
              </Text>
            </Section>

            <Section className="rounded-xl border border-border bg-[#0b1117] px-5 py-5">
              <Heading className="m-0 text-[18px] text-foreground">
                New Contact Form
              </Heading>
              <Text className="mb-0 mt-4 text-sm text-[#9aa5b1]">Name</Text>
              <Text className="m-0 text-base text-foreground">{name}</Text>

              <Text className="mb-0 mt-4 text-sm text-[#9aa5b1]">Email</Text>
              <Text className="m-0 text-base text-foreground">{email}</Text>

              <Text className="mb-0 mt-4 text-sm text-[#9aa5b1]">Message</Text>
              <Text
                className="m-0 whitespace-pre-wrap text-base leading-7 text-foreground"
                dangerouslySetInnerHTML={{ __html: sanitizedMessage }}
              />
            </Section>

            <Section className="mt-7">
              <Button
                href={`mailto:${email}`}
                className="rounded-md bg-[#08ffe6] px-5 py-3 text-sm font-semibold text-black no-underline"
              >
                Reply to {name}
              </Button>
            </Section>

            <Hr className="my-8 border-border" />

            <Section>
              <Text className="m-0 text-xs text-muted-foreground">
                Sent from your portfolio contact form.
              </Text>
              <Text className="m-0 mt-2 text-xs text-muted-foreground">
                Portfolio: {" "}
                <Link
                  href="https://lithira-jayanaka.vercel.app"
                  className="text-[#08ffe6] no-underline"
                >
                  lithira-jayanaka.vercel.app
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
