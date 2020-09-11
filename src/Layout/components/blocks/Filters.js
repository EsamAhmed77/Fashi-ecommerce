import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import "./style/Filters.scss";

export class PriceFilter extends React.Component {
  state = {
    minValue: 0,
    maxValue: 200,
  };

  onSlide = (render, handle, value, un) => {
    this.setState({
      minValue: value[0].toFixed(0),
      maxValue: value[1].toFixed(0),
    });
  };

  render() {
    const { minValue, maxValue } = this.state;
    return (
      <div className="filters">
        <div className="filters-text">Price</div>
        <div className="price-filter-container">
          <Nouislider
            connect
            start={[0, 200]}
            range={{
              min: [0],
              max: [200],
            }}
            onSlide={this.onSlide}
          />
        </div>
        <div className="filter-price">
          <div className="filter">
            <button>filter</button>
          </div>

          <div className="range">
            Range: $<span>{minValue}</span> - $<span>{maxValue}</span>
          </div>
        </div>
      </div>
    );
  }
}

export const ColorFilter = () => {
  return (
    <div className="filters">
      <div className="filters-text">Color</div>
      <div className="color-filter-container">
        <ul className="list-unstyled">
          <li>
            <input
              className="checkbox-color-filter"
              type="checkbox"
              id="color-filter1"
              name="color-filter1"
            />
            <label
              className="color-filter color-filter1"
              htmlFor="color-filter1"
            ></label>
          </li>
          <li>
            <input
              className="checkbox-color-filter"
              type="checkbox"
              id="color-filter2"
              name="color-filter2"
            />
            <label
              className="color-filter color-filter2"
              htmlFor="color-filter2"
            ></label>
          </li>
          <li>
            <input
              className="checkbox-color-filter"
              type="checkbox"
              id="color-filter3"
              name="color-filter3"
            />
            <label
              className="color-filter color-filter3"
              htmlFor="color-filter3"
            ></label>
          </li>
          <li>
            <input
              className="checkbox-color-filter"
              type="checkbox"
              id="color-filter4"
              name="color-filter4"
            />
            <label
              className="color-filter color-filter4"
              htmlFor="color-filter4"
            ></label>
          </li>
          <li>
            <input
              className="checkbox-color-filter"
              type="checkbox"
              id="color-filter5"
              name="color-filter5"
            />
            <label
              className="color-filter color-filter5"
              htmlFor="color-filter5"
            ></label>
          </li>
          <li>
            <input
              className="checkbox-color-filter"
              type="checkbox"
              id="color-filter6"
              name="color-filter6"
            />
            <label
              className="color-filter color-filter6"
              htmlFor="color-filter6"
            ></label>
          </li>
          <li>
            <input
              className="checkbox-color-filter"
              type="checkbox"
              id="color-filter7"
              name="color-filter7"
            />
            <label
              className="color-filter color-filter7"
              htmlFor="color-filter7"
            ></label>
          </li>
        </ul>
      </div>
    </div>
  );
};
