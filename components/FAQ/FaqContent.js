import React from "react";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import AnimatedText from "../Common/AnimatedText";

const FaqContent = ({ faqs, background }) => {
	return (
		<>
			<div className="faq-area" style={{ backgroundImage: `url(${background})` }}>
				<div className="container">
					<div className="section-title">
						<span>FAQ</span>
						<AnimatedText as="h2" className="title" html="Frequently Ask Questions" />
					</div>

					<div className="faq-accordion">
						<Accordion preExpanded={[0]}>
							{faqs.map((el, index) => (
								<AccordionItem uuid={index} key={index}>
									<AccordionItemHeading>
										<AccordionItemButton>{el.question}</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p style={{ fontSize: "19px" }}>{el.answer}</p>
									</AccordionItemPanel>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</>
	);
};

FaqContent.defaultProps = {
	faqs: [],
};

export default FaqContent;
