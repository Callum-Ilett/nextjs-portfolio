import "../styles/services.css";

const Service = ({ name, desc, icon }) => {
  return (
    <div className="service">
      <h4>{name}</h4>
      <div className="service__container">
        <div className="service__image">
          <img src={icon} alt={name} />
        </div>
        <div className="service__text">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

function Services() {
  const services = [
    {
      name: "E-commerce",
      desc:
        "I can develop an eCommerce solution tailored to the needs of yourself or your business",
      icon: "https://www.flaticon.com/svg/static/icons/svg/2258/2258424.svg",
    },
    {
      name: "SEO",
      desc:
        "I use standard SEO practises, allowing your site to rank higher in search engine results",
      icon: "https://www.flaticon.com/svg/static/icons/svg/2210/2210194.svg",
    },
    {
      name: "CMS",
      desc:
        "I develop content management systems, allowing you to view/edit important content on your website",
      icon: "https://www.flaticon.com/svg/static/icons/svg/2210/2210212.svg",
    },
    {
      name: "Web Development",
      desc:
        "I develop bespoke websites, allowing them to remain unique and function as required",
      icon: "https://www.flaticon.com/svg/static/icons/svg/2210/2210153.svg",
    },
  ];
  return (
    <div className="services">
      {services.map((service, index) => {
        return (
          <Service
            key={index}
            name={service.name}
            desc={service.desc}
            icon={service.icon}
          />
        );
      })}
    </div>
  );
}

export default Services;
