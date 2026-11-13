import type { ReactNode } from "react";
import firebaseLogo from "../../icons/Logo for custom-software page/Firebase Logo.png";
import flutterLogo from "../../icons/Logo for custom-software page/flutter_icon.png";
import nodeLogo from "../../icons/Logo for custom-software page/Node js.png";
import amazonIotLogo from "../../icons/Logo for iot-solutions/amazon IoT Core.png";
import azureIotLogo from "../../icons/Logo for iot-solutions/Azure IoT.png";
import googleCloudLogo from "../../icons/Logo for iot-solutions/Google Cloud.png";
import mqttLogo from "../../icons/Logo for iot-solutions/mqtt-icon-solid.png";
import nodeRedLogo from "../../icons/Logo for iot-solutions/node-red-icon.png";
import raspberryPiLogo from "../../icons/Logo for iot-solutions/raspberry_pi.png";

const marks: Record<string, ReactNode> = {
  React: <><circle cx="36" cy="36" r="5" fill="#61dafb" /><g fill="none" stroke="#61dafb" strokeWidth="3"><ellipse cx="36" cy="36" rx="29" ry="11" /><ellipse cx="36" cy="36" rx="29" ry="11" transform="rotate(60 36 36)" /><ellipse cx="36" cy="36" rx="29" ry="11" transform="rotate(120 36 36)" /></g></>,
  "Node.js": <><path d="m36 5 26 15v30L36 65 10 50V20L36 5Z" fill="#539e43" /><text x="36" y="42" textAnchor="middle" fontSize="17" fontWeight="700" fill="white">JS</text></>,
  Python: <><path d="M36 7c-16 0-16 7-16 16v7h24v4H13C5 34 5 43 5 49c0 10 6 16 16 16h7v-9c0-8 7-14 15-14h8c7 0 11-5 11-12V22C62 11 53 7 36 7Z" fill="#3776ab" /><path d="M36 65c16 0 16-7 16-16v-7H28v-4h31c8 0 8-9 8-15 0-10-6-16-16-16h-7v9c0 8-7 14-15 14h-8c-7 0-11 5-11 12v8c0 11 9 15 26 15Z" fill="#ffd43b" transform="translate(0 0) scale(.78) translate(10 10)" /><circle cx="29" cy="17" r="2" fill="white" /><circle cx="44" cy="54" r="2" fill="white" /></>,
  AWS: <><text x="36" y="39" textAnchor="middle" fontSize="25" fontWeight="700" fill="#232f3e">aws</text><path d="M15 48c12 8 29 9 43 1" fill="none" stroke="#ff9900" strokeWidth="4" strokeLinecap="round" /></>,
  MongoDB: <><path d="M37 6C24 23 20 34 26 48c2 5 6 9 10 12 8-8 13-16 10-28C44 22 40 13 37 6Z" fill="#47a248" /><path d="M37 13v48" stroke="#285e2c" strokeWidth="2" /></>,
  Docker: <><path d="M8 37h48c0 13-8 23-23 23S10 52 8 37Z" fill="#2496ed" /><g fill="#2496ed"><rect x="13" y="27" width="9" height="8" rx="1"/><rect x="24" y="27" width="9" height="8" rx="1"/><rect x="35" y="27" width="9" height="8" rx="1"/><rect x="24" y="16" width="9" height="9" rx="1"/><rect x="35" y="16" width="9" height="9" rx="1"/><rect x="35" y="5" width="9" height="9" rx="1"/></g><path d="M57 32c7-2 9 2 9 5-4 2-8 2-12 0" fill="#2496ed" /></>,
  Flutter: <><path d="M17 39 48 8h17L34 39l15 15-12 12-20-20 13-13Z" fill="#42a5f5"/><path d="m39 39 26-26H48L26 35l13 4Z" fill="#01579b"/><path d="m40 40 11 11 14-14H48l-8 3Z" fill="#29b6f6"/></>,
  Firebase: <><path d="m18 55 10-43c1-4 4-4 6 0l6 12 8-13c2-3 5-2 6 2l8 42c1 5-2 7-6 5L37 52 24 62c-4 3-7 0-6-7Z" fill="#ffca28"/><path d="m18 55 23-31 7 12-11 16-13 10c-4 3-7 0-6-7Z" fill="#f57c00"/><path d="m37 52 15-20 10 23c1 5-2 7-6 5l-19-8Z" fill="#ffa000"/></>,
  "AWS IOT": <><text x="36" y="34" textAnchor="middle" fontSize="20" fontWeight="700" fill="#232f3e">aws</text><path d="M12 47c13 8 34 9 49 0" fill="none" stroke="#ff9900" strokeWidth="4" strokeLinecap="round"/><circle cx="36" cy="58" r="5" fill="#232f3e"/></>,
  "AZURE IOT": <><path d="m12 53 19-39h13L25 53H12Zm18 0 13-25 17 25H30Z" fill="#0078d4"/></>,
  "GOOGLE CLOUD": <><path d="M53 35a18 18 0 0 0-34-5" fill="none" stroke="#4285f4" strokeWidth="9"/><path d="M19 30a18 18 0 0 0 2 27" fill="none" stroke="#34a853" strokeWidth="9"/><path d="M21 57a18 18 0 0 0 31-5" fill="none" stroke="#fbbc04" strokeWidth="9"/><path d="M52 52a18 18 0 0 0 1-17H37" fill="none" stroke="#ea4335" strokeWidth="9"/></>,
  "RASPBERRY PI": <><path d="M36 10c-9-9-23 0-18 12-12 2-13 18 0 21-4 12 9 21 18 12 9 9 22 0 18-12 13-3 12-19 0-21 5-12-9-21-18-12Z" fill="#c51a4a"/><circle cx="29" cy="31" r="3" fill="white"/><circle cx="43" cy="31" r="3" fill="white"/><path d="M27 43c5-4 13-4 18 0" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/></>,
  ARDUINO: <><ellipse cx="36" cy="36" rx="31" ry="20" fill="#00979d"/><text x="36" y="43" textAnchor="middle" fontSize="19" fontWeight="700" fill="white">ARD</text><circle cx="8" cy="36" r="4" fill="white"/><circle cx="64" cy="36" r="4" fill="white"/></>,
  Docker: <><path d="M8 37h48c0 13-8 23-23 23S10 52 8 37Z" fill="#2496ed" /><g fill="#2496ed"><rect x="13" y="27" width="9" height="8" rx="1"/><rect x="24" y="27" width="9" height="8" rx="1"/><rect x="35" y="27" width="9" height="8" rx="1"/><rect x="24" y="16" width="9" height="9" rx="1"/><rect x="35" y="16" width="9" height="9" rx="1"/><rect x="35" y="5" width="9" height="9" rx="1"/></g><path d="M57 32c7-2 9 2 9 5-4 2-8 2-12 0" fill="#2496ed" /></>,
  MQTT: <><circle cx="36" cy="36" r="30" fill="#660066"/><text x="36" y="43" textAnchor="middle" fontSize="18" fontWeight="700" fill="white">MQTT</text></>,
  "NODE-RED": <><path d="M18 52c-8-11-3-27 10-31 13-5 25 4 25 16 0 12-10 20-21 18" fill="none" stroke="#8f0000" strokeWidth="8" strokeLinecap="round"/><circle cx="47" cy="17" r="7" fill="#8f0000"/></>,
};

export function SoftwareTechLogo({ name }: { name: string }) {
  const imageByName: Record<string, string> = {
    "Node.js": nodeLogo,
    Flutter: flutterLogo,
    Firebase: firebaseLogo,
    "AWS IOT": amazonIotLogo,
    "AZURE IOT": azureIotLogo,
    "GOOGLE CLOUD": googleCloudLogo,
    MQTT: mqttLogo,
    "NODE-RED": nodeRedLogo,
    "RASPBERRY PI": raspberryPiLogo,
  };

  if (imageByName[name]) {
    return <img role="img" aria-label={`${name} logo`} src={imageByName[name]} className="h-[74px] w-[74px] object-contain" />;
  }

  return <svg role="img" aria-label={`${name} logo`} viewBox="0 0 72 72" className="h-[74px] w-[74px]" fill="none">{marks[name]}</svg>;
}
