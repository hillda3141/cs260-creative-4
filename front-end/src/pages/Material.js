const Material = () => {
  return (
      <div class="material-content-container container-lg">
          <h1>What are PCB's and how are they made?</h1>
          <p>
              Printed circuit boards (PCBs) are usually a flat laminated composite
              made from non-conductive substrate materials with layers of copper
              circuitry buried internally or on the external surfaces. They can be
              as simple as one or two layers of copper, or in high density applications
              they can have fifty layers or more. The flat composite surface is ideal
              for supporting the components that are soldered and attached to the PCB,
              while the copper conductors connect the components to one another
              electronically. The six basic components of a standard printed circuit board are:
          </p>
          <ul>
              <li>Prepreg</li>
              <li>Laminate</li>
              <li>Copper foil</li>
              <li>Soldermask</li>
              <li>Nomenclature</li>
              <li>Final finish</li>
          </ul>
          <p>Prepreg is a thin glass fabric that is coated with resin and dried,
          in special machines called prepreg treaters. The glass is the mechanical
          substrate that holds the resin in place. The resin – usually FR4 epoxy,
          polyimide, Teflon, and others – starts as a liquid that is coated onto
          the fabric. As the prepreg moves through the treater, it enters an oven
          section, and begins to dry. Once it exits the treater, it is dry to the
          touch.</p>
          <div class="material-image-holder-1">
            <img src="images/pcb_materials_1.jpg"></img>
          </div>
          <p>When prepreg is exposed to higher temperatures, usually above 300º
          Fahrenheit, the resin begins to soften and melt. Once the resin in the
          prepreg melts, it reaches a point (called thermosetting) where it then
          re-hardens to become rigid again and very, very strong. Despite that strength,
          prepreg and laminate, tends to be very light. Prepreg sheets, or fiberglass,
          are used to manufacture many things – from boats, to golf clubs, aircraft,
          and wind turbine blades. But it is also critical in PCB manufacturing.
          Prepreg sheets are what we use to glue the PCB together, and they are
          also what is used to build the second component of a PCB – laminate.</p>
          <p>Laminates, sometimes called copper clad laminates, are composed of
          sheets of prepreg, that are laminated together with heat and pressure,
          with sheets of copper foil on either side. Once the resin hardens, PCB
          laminates are like a plastic composite, with sheets of copper foil on
          both sides.</p>
          <p>We image and etch away the copper foil, to produce the circuitry on
          the laminate surfaces. These copper circuits will become the conductors,
          or electrical wiring, on the internal and external layers of the board.
          When the laminate layers are imaged and etched with the circuits, they
          are then laminated together using the prepreg discussed earlier.</p>
          <p>Soldermask is the green epoxy coating that covers the circuits on the
          outerlayers of the board. The internal circuits are buried in the layers
          of prepreg, so they do not need to be protected. But the external layers,
          if left unprotected, will oxidize and corrode over time. Soldermask
          provides that protection to the conductors on the outside of the PCB.</p>
          <p>Nomenclature, or sometimes called silk screen, is the white letters
          that you see on top of the soldermask coating on a PCB. Nomenclature is
          the lettering that shows where each component goes on the board, and
          sometimes provides component orientation as well.</p>
          <div class="material-image-holder-2">
            <img src="images/pcb_materials_2.jpg"></img>
          </div>
          <p>Both soldermask and nomenclature are available in other colors besides
          green and white, but those are the most popular. Soldermask protects all
          the circuits on the outerlayers of the PCB, where we do not intend to
          attach components. But we also need to protect the exposed copper holes
          and pads where we plan to solder and mount the components. To protect
          those areas, and to provide a good solderable finish, we usually use
          metallic coatings, such as nickel, gold, tin/lead solder, silver and
          other final finishes designed just for PCB manufacturers.</p>
          <p>PCB Guru, LLC has been making high-quality electronic PCB’s for over
          40 years. As a printed circuit board manufacturer over the years, we
          have specialized in a wide variety of circuit board types as we kept
          pace with rapidly changing market needs. We maintain an expert staff
          of more than 90 employees at our 55,000-square-foot facility in
          Minneapolis, Minnesota. Over time, to serve the needs of modern
          electronics, we developed expertise in manufacturing flexible circuits
          and rigid flex PCBs.</p>
          <p>Flexible and rigid flex PCBs provide the foundation for highly
          sophisticated electrical systems that can fit inside of small devices.
          They can also be designed and manufactured to be very thin and very
          light, without sacrificing survivability. These PCBs offer a high degree
          of reliability in environments with high shock and vibration. Industries
          that frequently use flexible and rigid flex PCBs include aerospace,
          medical, military, telecommunications, and others.</p>
      </div>
    );
};

export default Material;