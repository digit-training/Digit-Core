import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from 'react-router-dom';
import { Header, ActionBar, SubmitBar, Toast } from '@egovernments/digit-ui-react-components';

const View = () => {
    const { t } = useTranslation()
    const history = useHistory()
    const location = useLocation()
    const searchparams = new URLSearchParams(location.search);
     const registrationNumber = searchparams.get("serviceRequestId");
    var Digit = window.Digit || {};
    const tenantId = Digit.ULBService.getCurrentTenantId()

    console.log(registrationNumber)
    const searchParams = {
        tenantId,
        serviceRequestId: registrationNumber,
    }
    const newData = {}

    const [data, setData] = useState(null);
    const fetchData = async () => {
        try {
            const result = await Digit.PGRService.PGROpensearch( searchParams);
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    };
    useEffect(() => {
        fetchData().then((result) => {
            if (result !== null) {
                setData(result);
            }
        });
    }, []);
    console.log(data, " ddddddddddddddd")
    if(data==null){
      return (<div>sdfsf</div>)
    }
    else{
    return (
        <React.Fragment>
           <Header>{t(`Complaint Summary`)}</Header>
           <h1>Complaint Details</h1>
            <div className="notice_and_circular_main gap-ten">
              <div className="documentDetails_wrapper">
                    <div className="documentDetails_row_items"><p className="documentDetails_title">{`${t('Complaint Id')}:`}</p> <p>{data?.ServiceWrappers[0].service.citizen.id}</p> </div>
                    <div className="documentDetails_row_items"><p className="documentDetails_title">{`${t('Name')}:`}</p> <p>{t(data?.ServiceWrappers[0].service.citizen.name)}</p> </div>
                    <div className="documentDetails_row_items"><p className="documentDetails_title">{`${t('Mobile Number')}:`}</p> <p>{t(data?.ServiceWrappers[0].service.citizen.mobileNumber)}</p> </div>
                    <div className="documentDetails_row_items"><p className="documentDetails_title">{`${t('Service Code')}:`}</p> <p>{t(data?.ServiceWrappers[0].service.serviceCode)}</p> </div>
                    <div className="documentDetails_row_items"><p className="documentDetails_title">{`${t('Service Request Id')}:`}</p> <p>{t(data?.ServiceWrappers[0].service.serviceRequestId)}</p> </div>
                    <div className="documentDetails_row_items"><p className="documentDetails_title">{`${t('Additional Details')}:`}</p> <p>{t(data?.ServiceWrappers[0].service.additionalDetail)}</p> </div>
                    <div className="documentDetails_row_items"><p className="documentDetails_title">{`${t('Status')}:`}</p> <p>{t(data?.ServiceWrappers[0].workflow.action)}</p> </div>
                    <div className="documentDetails_row_items"><p className="documentDetails_title">{`${t('Source')}:`}</p> <p>{t(data?.ServiceWrappers[0].service.source)}</p> </div>

              </div>
            </div>
            <h2>Address details</h2>
            <div className="notice_and_circular_main gap-ten">
              <div className="documentDetails_wrapper">
                    <div className="documentDetails_row_items"><p className="documentDetails_title">{`${t('Door Number')}:`}</p> <p>{t(data?.ServiceWrappers[0].service.address.doorNo)}</p> </div>
                    <div className="documentDetails_row_items"><p className="documentDetails_title">{`${t('Building Name')}:`}</p> <p>{t(data?.ServiceWrappers[0].service.address.buildingName)}</p> </div>
                    <div className="documentDetails_row_items"><p className="documentDetails_title">{`${t('City')}:`}</p> <p>{t(data?.ServiceWrappers[0].service.address.city)}</p> </div>
                    <div className="documentDetails_row_items"><p className="documentDetails_title">{`${t('Pin Code')}:`}</p> <p>{t(data?.ServiceWrappers[0].service.address.pincode)}</p> </div>
                    <div className="documentDetails_row_items"><p className="documentDetails_title">{`${t('State')}:`}</p> <p>{t(data?.ServiceWrappers[0].service.address.state)}</p> </div>
                    <div className="documentDetails_row_items"><p className="documentDetails_title">{`${t('Country')}:`}</p> <p>{t(data?.ServiceWrappers[0].service.address.country)}</p> </div>
                    <div className="documentDetails_row_items"><p className="documentDetails_title">{`${t('Landmark')}:`}</p> <p>{t(data?.ServiceWrappers[0].service.address.landmark)}</p> </div>
              </div>
            </div>
        </React.Fragment>
    )
          }
}
export default View