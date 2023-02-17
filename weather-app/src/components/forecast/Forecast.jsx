import "./forecast.css";
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const weekd = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forecast = ({ data }) => {
  // Based on the current day, it will output a new array with the passed days at the end of the array, so that we can see next 7 days from today
  const currentDay = new Date().getDay();
  const forecastDays = weekd.slice(currentDay, weekd.lenght).concat(weekd.slice(0, currentDay));

  return (
    <>
      <h2>Weather for the next 7 days</h2>
      <Accordion>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className="icon-small" />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="curr-temp">{item.main.temp}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
