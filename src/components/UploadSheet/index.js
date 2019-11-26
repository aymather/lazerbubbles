import React, { Fragment, useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import useGoogleSheets from '../../utils/hooks/useGoogleSheets';
import { GoogleSheetsContext } from '../../utils/contexts/googleSheetsContext';
import ListSheets from './ListSheets';

const Index = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [sheetsState, setSheetsState] = useContext(GoogleSheetsContext);

    const toggle = () => setPopoverOpen(!popoverOpen);

    const { getSheets } = useGoogleSheets();

    useEffect(() => {
        getSheets();
    }, [])

    return (
        <Fragment>
            <FontAwesomeIcon id="Popover1" icon={faUpload} style={{cursor: 'pointer'}} />

            <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                <PopoverHeader>Google Sheets</PopoverHeader>
                {
                    sheetsState.sheets ? 
                        <ListSheets toggle={toggle} sheets={sheetsState.sheets} /> : <PopoverBody>Try connecting to Google first :D</PopoverBody>
                }
            </Popover>
        </Fragment>
    )
}

export default Index;