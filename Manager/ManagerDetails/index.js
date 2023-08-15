import React from 'react'
import { useStyles } from './style'
import { getDate } from '../../../../Utils/orderDetails'
import BasicInfo from './BasicInfo'

const ManagerDetails = props => {
    const itemData = props.itemData
    console.log({ itemData })
    const classes = useStyles()

    const initialValues = {
        firstName: itemData?.FirstName || 'N/A',
        lastName: itemData?.LastName || 'N/A',
        fullName: itemData?.Fullname || 'N/A',
        userName: itemData?.UserName || 'N/A',
        email: itemData?.Email || 'N/A',
        phoneNo: itemData?.PhoneNo || 'N/A',
        password: itemData?.Password || 'N/A',
        cellPhone: itemData?.CellPhone || 'N/A',
        extension: itemData?.Extension || 'N/A',
        createDate: getDate(itemData?.CreateDate) || 'N/A',
        userId: itemData?.UserId || 'N/A',
        address1: itemData?.Address1 || 'N/A',
        addressTwo: itemData?.AddressTwo || 'N/A',
        country: itemData?.Country || 'N/A',
        city: itemData?.City || 'N/A',
        state: itemData?.State || 'N/A',
        zipCode: itemData?.ZipCode || 'N/A'
    }

    return (
        <div className={classes.container}>
            <BasicInfo values={initialValues} />
        </div>
    )
}

export default ManagerDetails
