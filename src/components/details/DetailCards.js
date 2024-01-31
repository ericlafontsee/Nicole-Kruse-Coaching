import React from 'react';
import Card from "../../ui/Card";

const DetailCards = () => {
  return (
    <div className="container card__container text-center">
      <div className="row">
        <div className="card__options col-lg-9 mx-auto py-3 shadow-blur">
          <div className="row">
            <Card title="Balance" text="Enjoy what you love while prioritizing your health goals"/>
            <Card title="Intention" text="Learn how to small changes can impact your results"/>
            <Card title="Sustainability" text="Set yourself up for long term success"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCards