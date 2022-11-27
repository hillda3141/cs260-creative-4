const Services = () => {
  return (
      <div class="service-option-container container-lg">
        <a class="service-option" href="pcb-production.html">
          <img src="images/pcb_production.jpg"></img>
          <div class="service-option-text-container">
            <h2>PCB Production</h2>
            <p>We pride ourselves on being able to help our customers with any PCB
            dilema they find themselves in. So, we strive every day to help you
            from the beginning to the end of your project, whether you're a hobbiest
            or a multi-million dollar corporation. And that process starts with PCB
            production. You design the PCB and we'll make it for you at the price-match
            gurantee and a very competative lead time. Design your PCB using our own
            SwiftCircuit software or any other PCB design software. Then check it's
            manuafactuability with out online checking tool. After that, it's off
            to the shop and on you doorstep!</p>
          </div>
        </a>
        <a class="service-option" href="pcb-assembly.html">
          <div class="service-option-text-container">
            <h2>PCB Assembly</h2>
            <p>Like we said, we're here for you throughout the entire process! 
            We can do more than just produce PCB's for you; we'll assemble them 
            too. Whether you send us the part to solder on or you point us to the
            manufacturers and we buy the parts ourselves, we have a team of professional
            solderers and automated machinery that will make you PCB's a plug-and-play
            wonder when they arrive at your doorstep!</p>
          </div>
          <img src="images/pcb_assembly.jpg"></img>
        </a>
        <a class="service-option" href="flexpcb-production.html">
          <img src="images/flexpcb_production.jpg"></img>
          <div class="service-option-text-container">
            <h2>Flex-PCB Production</h2>
            <p>Some project require more than a ridgid PCB. You need something 
            flexible! No worries! Our team here at PCB Guru doesn't just specialize
            in silicon PCB's, we are professionals in flexible ones as well. We'll
            get your order prepared and sent using the same process you would use
            for our traditional PCB production.</p>
          </div>
        </a>
        <a class="service-option" href="pcb-installation.html">
          <div class="service-option-text-container">
            <h2>PCB Installation</h2>
            <p>We know that some of our customers would rather not deal with the 
            pains of installing PCB's when they arrive. Product development is difficult
            and that is why we offer our customers a service unrivaled by our competition.
            We will install the PCB's into your product for you and connect them
            to any other electronics necessary for the product to function. This
            removes a lot of stress off the designer of a product, so they can focus
            on what they're good at: designing! And they can trust us to do what
            we're good at: assembling stellar electronic PCB's and integrating them 
            into novel products.</p>
          </div>
          <img src="images/pcb_installation.jpg"></img>
        </a>
      </div>
    );
};

export default Services;