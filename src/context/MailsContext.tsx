import { createContext } from 'react';
import { Mail } from '../constants/mail';

export const MailsContext = createContext<{ addMail: (mail: Mail) => void, fetchMails: () => void, mails: Mail[] }>({ addMail: () => {}, fetchMails: () => {}, mails: [] })
