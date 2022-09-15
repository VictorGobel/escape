export enum BodyType {
    Image,
    Paragraph,
    Link,
}

export type BodyElement = {
    type: BodyType;
    content: string;
    link?: string;
}

export type Mail = {
    body: BodyElement[];
    from: string;
    receivedAt: Date;
    title: string;
    to: string;
}

export const startingMails: Mail[] = [
    {
        body: [
            {
                type: BodyType.Paragraph,
                content: 'Ceci est un mail de test'
            }
        ],
        from: 'Gauthier',
        receivedAt: new Date(),
        title: 'Mon super titre',
        to: 'You',
    },

    {
        body: [
            {
                type: BodyType.Paragraph,
                content: 'Spam'
            }
        ],
        from: 'Spam',
        receivedAt: new Date(),
        title: 'Mon spam',
        to: 'You',
    },

    {
        body: [
            {
                type: BodyType.Paragraph,
                content: 'Bonjour cher confrère,'
            },
            {
                type: BodyType.Paragraph,
                content: "Si je t'écris aujourd'hui, ce n'est pas par plaisir. Quelque chose de grave m'est arrivé : je pense m'être fait enlevé par la mafia Hongkongaise",
            },
            {
                type: BodyType.Paragraph,
                content: "Laisse moi tout t'expliquer :",
            },
            {
                type: BodyType.Paragraph,
                content: "J'ai été embauché par la police de Hong Kong comme détective privé pour investiguer les cadres de la mafia local." +
                    "J'ai réussi à trouver certaines de leur identités et leurs différentes planques. Cependant je pense avoir été découvert lors de mon investigation." +
                    "Pour être sur que je ne disparaisse pas sans prévenir, j'ai programmé des mails qui doivent s'envoyer automatiquement. J'étais censé les supprimer si tout se passait bien. " +
                    "Par sécurité, j'ai mis tout les documents en ligne et les ai caché dans mon site internet pour éviter qu'ils tombent dessus et relocalise leurs activités. " +
                    "Je fais confiance a ton intellect pour dénicher les informations que j'ai planqué ici : ",
            },
            {
                type: BodyType.Link,
                content:'Mon site web',
                link: '/home',
                
            }
        ],
        from: 'Professeur Gauthier',
        receivedAt: new Date(),
        title: 'Mon autre',
        to: 'You',
    }
];
