import styled from "styled-components"
import { MailList } from "../components/mailing/MailList"
import { MailComponent } from "../components/mailing/MailComponent"
import { useContext, useState } from "react"
import { Mail } from "../constants/mail"
import { MailsContext } from "../context/MailsContext"


export const Mailing = () => {
    const { mails, fetchMails } = useContext(MailsContext)

    const [selectedMail, setSelectedMail] = useState<Mail | null>(null);

    return (
        <MailingContainer>
            <MailListContainer>
                <MailList
                    mails={mails}
                    fetchMails={() => {
                        setSelectedMail(null);
                        fetchMails();
                    }} 
                    selectedMail={selectedMail}
                    setSelectedMail={setSelectedMail}
                />
            </MailListContainer>
            <MailContainer>
                <MailComponent selectedMail={selectedMail} />
            </MailContainer>
        </MailingContainer>
    )
}

const MailingContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    background-color: ${({ theme }) => theme.mailing.color.background};
    color: ${({ theme }) => theme.mailing.color.text};
`

const MailListContainer = styled.div`
    z-index: 1;
    width: 20%;
    flex-shrink: 0;
    border-right: 1px solid ${({ theme }) => theme.mailing.color.highlight};
    box-shadow: -2px 0px 10px 0px #006ea2;
`

const MailContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`
