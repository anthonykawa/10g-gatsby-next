import React, {Component} from 'react'
import { withPrefix } from 'gatsby-link';
import { Link } from 'gatsby';

import HomeCarousel from '../components/HomeCarousel';
import ProductModal from '../components/ProductModal';

import Layout from '../components/layout'

const slide1 = withPrefix('/images/slide1.jpg');
const LinkedIn = withPrefix('/images/linkedin.jpg');
const N540 = withPrefix('/images/N-540.png');
const slide3 = withPrefix('/images/slide3.jpg');
const USBtoNBASE = withPrefix('/images/USBtoNBASE-T.png');
const N540_PDF = withPrefix('/pb/N-540.pdf')
const USBtoNBASE_PDF = withPrefix('/pb/USBtoNBASE-T.pdf')

const items = [
  {
    id: 0,
    src: slide1,
    altText: "N-540 PCIe 10G NBASE-T Network Controller Card",
    mainImage: N540,
    caption: "The N-540 delivers up to 10G performance using a single microprocessor",
    captionHeader: "NBASE-T and 10GBASE-T All-In-One",
    linkID: 'n540_button',
    title: "Sunrich N-540 PCIe 10G NBASE-T Network Card",
    features: [
      "10Gbps Networking delivers up to 10X-faster data-transfer speeds for bandwidth-demanding tasks over existing cabling",
      "Full Compatibility network speeds of 10/5/2.5/1Gbps and 100Mbps, for seamless backward compatibility",
      "Windows and Linux supported",
      "The RJ45 port is a standard used in most offices and homes, to utilize the low cost of standard copper network cabling",
      "Lower CPU utilization and increased network performance  through AQtion™ technology"
    ],
    description: `
        N-540 PCIe 10G NBASE-T Single Port Networking Adapter provides single-port connectivity that allows a server, workstation, or gaming 
        desktop computer to join a network in your home, business or datacenter with ease. 
        
        The network card incorporates AQtion™ patented technologies to offer a low cost, high-performance, and low power solution. The 10G NBASE-T 
        Network Adapter Card connects directly into your PCIe x16, x8, or x4 slot on your motherboard and is compatible with Windows, and Linux 
        operating systems. With the QoS support, you can prioritize data to ensure the highest quality service from your most data hungry applications.
        `,
    pb_link: N540_PDF,
  },
  {
    id: 1,
    src: slide3,
    altText: "USB-C to NBASE-T 2.5G/5G Adapter",
    mainImage: USBtoNBASE,
    caption: "Add NBASE-T to almost any device using our latest Type-C to Ethernet adapter",
    captionHeader: "The Future for Today",
    linkID: 'USB_NBASE-T_button',
    title: "Sunrich N-540 PCIe 10G NBASE-T Network Card",
    features: [
      "NBASE-T Networking delivers up to 5X-faster data-transfer speeds for bandwidth-demanding tasks over existing cabling",
      "Full Compatibility network speeds of 5G/2.5G/1G/100M, for seamless backward compatibility",
      "Windows and Linux supported",
      "Lower CPU utilization and increased network performance through AQtion™ technology",
      "Supports Quality of Service (QoS) to help increase performance for the more data intensive tasks"
    ],
    description: `
      The USB 3.1 Gen 1 to NBASE-T Networking Adapter provides single-port connectivity that allows a server, workstation, tablet, or laptop 
      computer to join a network in your business or datacenter with ease. 
      The network adapter incorporates the AQtion™ patented technology to offer a low-cost, high-performance, and low power solution. The USB 
      3.1 Gen 1 to NBASE-T Network Adapter connects directly into your USB Type-C port on your computer and is compatible with Windows, macOS, and 
      Linux operating systems. With the QoS support, you can prioritize data to ensure the highest quality service from your most data hungry 
      applications. 
      `,
    pb_link: USBtoNBASE_PDF,
  }
]

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: items[0],
      modal: false
    }
  }

  toggleModal = (id) =>{
    console.log(id)
    this.itemSelect(id)
    this.toggle()
  }

  itemSelect = (id) => {
    this.setState({
      item: items[id]
    })
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <Layout>
        <ProductModal item={this.state.item} modal={this.state.modal} toggle={() => this.toggle} />
        <HomeCarousel items={items} itemSelect={() => this.toggleModal} />

        <div className="container">
          <div className="row feature-boxes" style={{ padding: '50px 0' }}>
            <div className="col-lg-4">
              <h4>what's new</h4>
              <div className="feature-box">
                <div style={{ height: '250px', overflow: 'hidden' }}>
                  <img className="img-fluid" src={withPrefix('/images/USBtoNBASE-T.png')} alt="" />
                </div>
                <div className="feature-textbox">
                  <p>Sunrich has been hard at work, developing our next generation networking products and have developed
                            the first USB&#8209;C to NBASE&#8209;T Adapter of it's kind. </p>
                  <a href="javascript:void(0)" onClick={() => {this.toggleModal(1);}}  id="USB_NBASE-T_link">Click the link to read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h4>follow us</h4>
              <div className="feature-box">
                <div style={{ height: '250px', overflow: 'hidden' }}>
                  <img width="450px" src={withPrefix('/images/linkedin.jpg')} alt="" />
                </div>
                <div className="feature-textbox">
                  <p>Not already following us on LinkedIn? Come check us out, and make sure you hit to follow button to
                            keep yourself updated on the new projects we are working on.</p>
                  <a href="https://www.linkedin.com/company/sunrich-technology/" target="_blank">Visit our LinkedIn profile</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h4>Partnership</h4>
              <div className="feature-box">
                <div style={{ height: '250px', overflow: 'hidden' }}>
                  <img className="img-fluid" src={withPrefix('/images/AquantiaChip_lg.jpg')} alt="" />
                </div>
                <div className="feature-textbox">
                  <p>Sunrich is the first qualified hardware partner for Aquantia, which will ensure release of the latest
                            generation Multi-Gig products, and market leading hardware support.</p>
                  <a href="http://www.nbaset.org/technology/what-is-nbase-t/" target="_blank">Read the press release from Aquantia</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
