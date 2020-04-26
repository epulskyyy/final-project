import React from "react";
import cari from "../../asset/review/cari-mudah.svg";
import terpercaya from "../../asset/review/terpercaya.svg";
import booking from "../../asset/review/booking.svg";
import { Container, Row, Col } from "react-bootstrap";

const Review = () => {
  return (
    <Container>
      <h2 className="text-muted text-center mb-5">Mengapa Ternak Kos ?</h2>
      <Row>
        <Col>
          <Row>
            <img
              className="mb-4"
              src={cari}
              height="75rem"
              width="75rem"
              alt="cari"
            />
          </Row>
          <Row>
            <Col>
              <h4 className="text-center text-muted">Carinya Mudah</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center text-muted">
                Pemesanan mudah, tinggal pilih properti dan klik Pesan Sekarang!
              </p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <img
              className="mb-4"
              src={terpercaya}
              height="75rem"
              width="75rem"
              alt="terpercaya"
            />
          </Row>
          <Row>
            <Col>
              <h4 className="text-center text-muted">Terpercaya</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center text-muted">
                Kos yang telah terverifikasi, dilengkapi dengan peta lokasi,
                serta foto galeri.
              </p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <img
              className="mb-4"
              src={booking}
              height="75rem"
              width="75rem"
              alt="booking"
            />
          </Row>
          <Row>
            <Col>
              <h4 className="text-center text-muted">Bisa Booking</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center text-muted">
                Langsung bisa booking yang sesuai keinginanmu, kapan saja!
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Review;
