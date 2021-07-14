import React from 'react'
import {Modal , Button , Table, Row , Col} from 'react-bootstrap'

function SizeChart(props) {


    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
            </svg>
            <span>  Size Detail</span>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className="pb-0">
                {/* <Row className="d-flex flex-row justify-content-center">
                    <Col xs={12} lg={10}>
                    </Col>
                </Row> */}
                <Row className="d-flex flex-row justify-content-center ">
                    <Col className="p-0 text-center" xs={12} lg={10}>
                        <p>Measurements : Chest width x Waist width x Body length</p>
                        <ul className="text-start d-flex flex-row justify-content-center">
                            <Col xs={9} lg={5}>
                                <li>S (108cm x 108cm x 69cm)</li>
                                <li>M (112cm x 112cm x 70cm)</li>
                                <li>L (116cm x 116cm x 71cm)</li>
                                <li>XL (120cm x 120cm x 72cm)</li>
                            </Col>
                        </ul>
                        <p className=" fw-light">Size guide : Hoodies & Sweatshirts by Champion</p>
                        <Table striped bordered responsive>
                            <thead>
                                <tr>
                                    <th>International</th>
                                    <th>US</th>
                                    <th>UK</th>
                                    <th>EU</th>
                                    <th>AUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                 <tr>
                                    <td>XXXS</td>
                                    <td>34</td>
                                    <td>34</td>
                                    <td>44</td>
                                    <td>34</td>
                                </tr>
                                <tr>
                                    <td>XXS</td>
                                    <td>36</td>
                                    <td>36</td>
                                    <td>46</td>
                                    <td>36</td>
                                </tr>
                                <tr>
                                    <td>XS</td>
                                    <td>38</td>
                                    <td>38</td>
                                    <td>48</td>
                                    <td>38</td>
                                </tr>
                                <tr>
                                    <td>S</td>
                                    <td>40</td>
                                    <td>40</td>
                                    <td>50</td>
                                    <td>40</td>
                                </tr>
                                <tr>
                                    <td>M</td>
                                    <td>42</td>
                                    <td>42</td>
                                    <td>52</td>
                                    <td>42</td>
                                </tr>
                                <tr>
                                    <td>L</td>
                                    <td>44</td>
                                    <td>44</td>
                                    <td>54</td>
                                    <td>44</td>
                                </tr>
                                <tr>
                                    <td>XL</td>
                                    <td>46</td>
                                    <td>46</td>
                                    <td>56</td>
                                    <td>46</td>
                                </tr>
                                <tr>
                                    <td>XXL</td>
                                    <td>48</td>
                                    <td>48</td>
                                    <td>58</td>
                                    <td>48</td>
                                </tr>
                                <tr>
                                    <td>XXXL</td>
                                    <td>50</td>
                                    <td>50</td>
                                    <td>60</td>
                                    <td>50</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className="d-flex flex-row justify-content-center">
                <Button variant="secondary" className="w-25" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SizeChart
