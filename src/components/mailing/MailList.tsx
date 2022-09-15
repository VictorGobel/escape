import styled from 'styled-components';
import { IoReload } from 'react-icons/io5';
import { Mail } from '../../constants/mail';

export const MailList = ({
    mails,
    fetchMails,
    selectedMail,
    setSelectedMail,
}: {
    mails: Mail[];
    fetchMails: () => void;
    selectedMail: Mail | null;
    setSelectedMail: React.Dispatch<React.SetStateAction<Mail | null>>;
}) => {
    return (
        <MailListContainer>
            <TitleContainer>
                <span>Vos emails</span>
                <ReloadIcon onClick={fetchMails} />
            </TitleContainer>
            <MailsContainer>
                {mails.map((mail) => (
                    <MailContainer onClick={() => setSelectedMail(mail)}>
                        <MailTitle isSelected={mail === selectedMail}>{mail.title}</MailTitle>
                        <MailFrom>De: {mail.from}</MailFrom>
                        <MailDate>Reçu le: {mail.receivedAt.toLocaleString()}</MailDate>
                    </MailContainer>
                ))}
            </MailsContainer>
        </MailListContainer>
    );
};

const MailListContainer = styled.div`
    flex-grow: 1;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    font-size: 30px;
    color: ${({ theme }) => theme.mailing.color.highlight};
    border-bottom: 1px solid ${({ theme }) => theme.mailing.color.highlight};
    box-shadow: -2px 0px 10px 0px #006ea2;
`;

const ReloadIcon = styled(IoReload)`
    cursor: pointer;
`;

const MailsContainer = styled.div`
    overflow: auto;
`;

const MailContainer = styled.div`
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.mailing.color.highlight};
`;

const MailTitle = styled.div<{ isSelected: boolean }>`
    font-weight: 600;
    color: ${({ isSelected, theme }) => (isSelected ? theme.mailing.color.highlight : theme.mailing.color.text)};
`;

const MailFrom = styled.div`
    font-style: italic;
    font-size: 14px;
`;

const MailDate = styled.div`
    font-size: 12px;
    text-align: right;
`;
