import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="../../images/contact.gif"
        alt="email image"
        className="max-w-[300px]"
      />
      <ContactInfo />
      <div className=" bg-blue-500 text-xl font-bold text-white mb-5" > Follow My Journey</div>
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
