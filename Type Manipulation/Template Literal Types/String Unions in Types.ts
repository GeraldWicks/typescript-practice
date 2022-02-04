type World = "world";
type Greeting = `hello ${World}`; // type Greeting = "hello world";

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

//type AllLocaleIDs = "welcome_email" | "email_heading" | footer_title" | "footer_sendoff";

type LocalesIDs = "email" | "name";
type Lang = "en" | "ja" | "pt";
type LocaleMessageIDs = `${Lang}_${LocalesIDs}`; // type LocaleMessageIDs = "en_email" | "en_name" | "ja_email" | "ja_name" | "pt_email" | "pt_name"

const passedObject = {
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
};

// const person = makeWatchedObject({
//     firstName: "Saoirse",
//     lastName: "Ronan",
//     age: 26,
// });


// person.on("firstNameChanged", (newValue) => {
//     console.log(`firstName was changed to ${newValue}`);
// });