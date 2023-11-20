import React from "react";

function SaveContactButton(props) {
  function generateVcardData(card) {
    const googleMapPrefix = "https://maps.google.com/?q=";

    return `BEGIN:VCARD
VERSION:4.0
N:${card.data.lastName};${card.data.firstName};${card.data.middleName};${card.data.prefix};${card.data.suffix}
FN;CHARSET=utf-8:
${card.data.position ? `TITLE:${card.data.position}` : ""}
${card.data.company ? `ORG:${card.data.company}` : ""}
${card.data.website ? `URL;TYPE=Website:${card.data.website}` : ""}
${card.data.email ? `EMAIL;INTERNET;TYPE=Email:${card.data.email}` : ""}
${card.data.address ? `ADR:${card.data.address}` : ""}
${card.data.phone ? `TEL;TYPE=Call:${card.data.phone}` : ""}
${card.data.address ? `URL;TYPE=Address:https://maps.google.com/?q=${encodeURIComponent(card.data.address)}` : ""}
END:VCARD`;
  }

  const handleSaveContact = () => {
    const vcardData = generateVcardData(props.card);
    const blob = new Blob([vcardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${props.card.data.lastName}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleSaveContact}
      className="px-6 py-3 m-3 font-bold min-w-full bg-primary text-white rounded-full hover:bg-secondary">
      Save Contact
    </button>
  );
}

export default SaveContactButton;
