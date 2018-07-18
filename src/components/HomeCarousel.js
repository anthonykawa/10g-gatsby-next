import React, { Component } from 'react';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Media
} from 'reactstrap';

export default class HomeCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        const items = this.props.items;
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        const items = this.props.items;
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;
        const items = this.props.items;
        const itemSelect = this.props.itemSelect()
        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.id}
                    style={{ maxHeight: '492.25px' }}
                    tag="div"
                >
                    <div className="overlay" />
                    <img className="d-block w-100" src={item.src} alt={item.altText} />

                    <div className="carousel-caption">
                        <Media alt="" style={{ maxWidth: '400px', paddingBottom: '20px', margin: '0 auto' }} className="img-fluid d-sm-none d-md-inline" object src={item.mainImage} />
                        <h2>{item.captionHeader}</h2>
                        <p>{item.caption}</p>
                        <a href="javascript:void(0)" onClick={() => itemSelect(item.id)}>
                            <button className="btn btn-default" type="button">More Details</button>
                        </a>
                    </div>
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                style={{ maxHeight: '492.25px' }}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        )
    }
}