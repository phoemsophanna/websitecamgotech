import React from "react";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

const FaqContent = ({ faqs }) => {
	return (
		<>
			<div className="faq-area ptb-100">
				<div className="container">
					<div className="section-title">
						<span>FAQ</span>
						<h2>Frequently Ask Questions</h2>
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
