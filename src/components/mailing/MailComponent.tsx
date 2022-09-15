import { Link } from "react-router-dom"
import styled from "styled-components"
import { BodyType, Mail } from "../../constants/mail"

export const MailComponent = ({ selectedMail }: { selectedMail: Mail | null }) => {
    return (
        <MailComponentContainer>
            {selectedMail && (
                <>
                    <MailHeader>
                        <MailTitle>{selectedMail.title}</MailTitle>
                        <MailSubtitle>
                            <MailFrom>De: {selectedMail.from}</MailFrom>
                            <MailDate>Reçu le: {selectedMail.receivedAt.toLocaleString()}</MailDate>
                        </MailSubtitle>
                    </MailHeader>
                    <MailBody>
                        {selectedMail.body.map((bodyElement) => {
                            if(bodyElement.type === BodyType.Image) {

                            }
                            if(bodyElement.type === BodyType.Link && bodyElement.link) {
                                return (<MailLink to={bodyElement.link} target="_blank" rel="noopener noreferrer" >{bodyElement.content}</MailLink>)
                            }
                            return (
                                <MailParagraph>{bodyElement.content}</MailParagraph>
                            )
                        })}
                    </MailBody>
                </>
            )}

        </MailComponentContainer>
    )
}

const MailComponentContainer = styled.div`
    flex-grow: 1;
    margin: 15px;
    border: 1px solid ${({ theme }) => theme.mailing.color.highlight};
    box-shadow: 0px 0px 10px -4px #006ea2;
`

const MailHeader = styled.div`
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.mailing.color.highlight};
`

const MailTitle = styled.div`
    font-weight: 600;
    font-size: 20px;
`

const MailSubtitle = styled.div`
    display: flex;
    justify-content: space-between;
`

const MailFrom = styled.div`
    font-style: italic;
`

const MailDate = styled.div`
    text-align: right;
    font-size: 14px;
`

const MailBody = styled.div`
    padding: 10px;
`

const MailParagraph = styled.div`
    margin-top: 5px;
`

const MailLink = styled(Link)`
    margin-top: 50px;
`

