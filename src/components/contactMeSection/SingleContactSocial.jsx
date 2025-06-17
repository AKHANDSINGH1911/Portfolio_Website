const SingleContactSocial = ({ link, Icon, className, iconClass }) => (

 

   
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`group p-4 rounded-2xl transition-all duration-500 ${className}`}
  >
    <Icon className={`text-2xl transition-colors duration-300 ${iconClass}`} />
  </a>

  
 
);

export default SingleContactSocial