import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";

const FaqsContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((faq) => (
          <Accordion.Item key={faq.id}>
            <Accordion.Header>{faq.header}</Accordion.Header>
            <Accordion.Body>{faq.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Frame>
          <OptForm.Input type="text" placeholder="Enter Email" />
          <OptForm.Button>Get Started</OptForm.Button>
        </OptForm.Frame>
      </OptForm>
    </Accordion>
  );
};

export default FaqsContainer;
