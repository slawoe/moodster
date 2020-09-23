import React from "react";
import PropTypes from "prop-types";
import BasicPageLayout from "../../components/BasicPageLayout";
import ContentWithAddFunction from "../../components/ContentwithAddFunction";
import AddButton from "../../components/AddButton";
import DoctorsListElement from "../../components/DoctorsListElement";
import Searchbar from "../../components/Searchbar";
import { Link } from "react-router-dom";

const mockupData = [
  {
    name: "Heinz Müller",
    address: "Lindenstraße 10, 12345 Berlin",
    phone: "0123456789",
    mail: "test@test.de",
    officeHours: "Mo-Fr 10-18 Uhr",
  },
  {
    name: "belinda Müller",
    address: "Lindenstraße 10, 12345 Berlin",
    phone: "222",
    mail: "test@test.de",
    officeHours: "Mo-Fr 10-18 Uhr",
  },
  {
    name: "Alexander Müller",
    address: `Lindenstraße 10, 12345 Berlin`,
    phone: "333",
    mail: "test@test.de",
    officeHours: "Mo-Fr 10-18 Uhr",
  },
  {
    name: "Klaus Müller",
    address: "Lindenstraße 10, 12345 Berlin",
    phone: "444",
    mail: "test@test.de",
    officeHours: "Mo-Fr 10-18 Uhr",
  },
];

function Doctors() {
  return (
    <BasicPageLayout
      childrenheadsection={<Searchbar placeholder={"Arzt suchen"} />}
      childrenmainsection={
        <ContentWithAddFunction
          addcomponent={
            <Link to="/main/doctors/add">
              <AddButton description={"Arzt hinzufügen"} />
            </Link>
          }
          content={
            <>
              {mockupData?.map((doctor) => (
                <DoctorsListElement
                  key={doctor.name}
                  name={doctor.name}
                  address={doctor.address}
                  phone={doctor.phone}
                  mail={doctor.mail}
                  officeHours={doctor.officeHours}
                  id={doctor.name}
                />
              ))}
            </>
          }
        />
      }
    />
  );
}

export default Doctors;

Doctors.propTypes = {
  children: PropTypes.element.isRequired,
};
