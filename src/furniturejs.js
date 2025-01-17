import "./App.css";
import React from "react";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./Furniture.json";
import { useState } from "react";



function Furnitur() {
  const [items, setItems] = useState(data);

  const [activeKey, setActiveKey] = useState(0);

  const filterCat = (catItem) => {
    const catItems = data.filter((category) => {
      return category.category === catItem;
    });
    setItems(catItems);
  };

  const filterSubCat = (catItem) => {
    const catItems = data.filter((category) => {
      return category.sub_category === catItem;
    });
    setItems(catItems);
  };
  return (
    <div>
      <CNav
        variant="pills"
        layout="justify"
        role="tablist"
        style={{
          height: "60px",
          marginTop: "20px",
          paddingLeft: "10px",
          cursor: "pointer",
        }}
      >
        {/* <CNavItem>
          <CNavLink active={activeKey === 1} className="dropdown">
            <div className="dropdown">
              <div onClick={() => filterCat("HOME DECOR") & setActiveKey(1)}>
                Home Furnitures
              </div>
              <div className="dropdown-content">
                <CNavLink
                  onClick={() => filterSubCat("DOUBLE BED") & setActiveKey(1)}
                  active={activeKey === 2}
                >
                  Double Bed
                </CNavLink>
                <CNavLink
                  onClick={() => filterSubCat("CHAIR") & setActiveKey(1)}
                  active={activeKey === 2}
                >
                  Chair
                </CNavLink>
                <CNavLink
                  onClick={() => filterSubCat("DINING TABLE") & setActiveKey(1)}
                  active={activeKey === 2}
                >
                  Dining Table
                </CNavLink>
              </div>
            </div>
          </CNavLink>
        </CNavItem> */}

        <CNavLink
          onClick={() => filterSubCat("DOUBLE BED") & setActiveKey(6)}
          active={activeKey === 6}
        >
          Double Bed
        </CNavLink>
        <CNavLink
          onClick={() => filterSubCat("CHAIR") & setActiveKey(7)}
          active={activeKey === 7}
        >
          Chair
        </CNavLink>
        <CNavLink
          onClick={() => filterSubCat("DINING TABLE") & setActiveKey(8)}
          active={activeKey === 8}
        >
          Dining Table
        </CNavLink>
        <CNavItem>
          <CNavLink
            onClick={() => filterCat("WORK FROM HOME") & setActiveKey(9)}
            active={activeKey === 9}
          >
            
            TABLE
          </CNavLink>
        </CNavItem>        
            <CNavItem>
          <CNavLink
            onClick={() => filterCat("clock") & setActiveKey(5)}
            active={activeKey === 5}
          >
           Wall Clock
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => filterCat("vase") & setActiveKey(10)}
            active={activeKey === 10}
          >
            Flower Pot
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => filterCat("marble") & setActiveKey(11)}
            active={activeKey === 11}
          >
           Marble
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => filterCat("fountain") & setActiveKey(12)}
            active={activeKey === 12}
          >
            Fountain
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => filterCat("temple") & setActiveKey(13)}
            active={activeKey === 13}
          >
            temple
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => setItems(data) & setActiveKey(0)}
            active={activeKey === 0}
          >
            All
          </CNavLink>
        </CNavItem>
        <CNavItem>
        <CNavLink href="#" disabled>
     
          </CNavLink>
        </CNavItem>
        <CNavItem>
        <CNavLink href="#" disabled>
       
          </CNavLink>
        </CNavItem>
        <CNavItem>
        <CNavLink href="#" disabled>
       
          </CNavLink>
        </CNavItem>
        <CNavItem>
        <CNavLink href="#" disabled>
       
          </CNavLink>
        </CNavItem>
        
        <CNavItem>
        <CNavLink href="#" disabled>
       
          </CNavLink>
        </CNavItem>
        <CNavItem>
        <CNavLink href="#" disabled>
       
          </CNavLink>
        </CNavItem>
        <CNavItem>
        <CNavLink href="#" disabled>
       
          </CNavLink>
        </CNavItem>
        <CNavItem>
        <CNavLink href="#" disabled>
       
          </CNavLink>
        </CNavItem>
        <CNavItem>
        <CNavLink href="#" disabled>
       
          </CNavLink>
        </CNavItem>
        <CNavItem>
        <CNavLink href="#" disabled>
       
          </CNavLink>
        </CNavItem>
        <CNavItem>
        <CNavLink href="#" >
          Quotations       
          </CNavLink>
        </CNavItem>
        <CNavItem>
        <CNavLink href="#" >
          Email
        </CNavLink>
        </CNavItem>
        
        <CNavItem>
        <CNavLink href="tel:360-325-7623">Call Now <br />+1.00000000000.
          </CNavLink>
        </CNavItem>
        </CNav>
        
       
      <div className="table" style={{ width: "100%", padding: "20px" }}>
        <div class="row">
          {items.map((elem) => {
            const { id, name, imgSrc, WoodType, Dimension, price, size} = elem;
            return (
              <>
                <CCard
                  key={id}
                  style={{ width: "18rem", marginBottom: "10px" }}
                >
                  <CCardImage
                    orientation="top"
                    src={imgSrc}
                    width={200}
                    height={200}
                    style={{ padding: "20px" }}
                  />
                  <CCardBody>
                  <CCardTitle>ID: {id}</CCardTitle>
                      <CCardText>{name} {WoodType}</CCardText>
                      <CCardText>{size} </CCardText>
                  
                    </CCardBody>
                </CCard>
              </>
            );
          })}
        </div>
      </div>
      
    </div>
  );
}
export default Furnitur;
