import React from 'react'
import { useStyles } from '../style'
const BasicInfo = props => {
    const { values } = props
    const classes = useStyles()

    return (
        <>
            <h5 className={classes.header}>Basic Information</h5>
            <div className={classes.basicInfoContainer}>
                <div className={classes.col1}>
                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>User Id:</label>
                        <input
                            name="userId"
                            className={classes.textInput}
                            value={values.userId}
                            readOnly
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>First Name:</label>
                        <input
                            name="firstName"
                            className={classes.textInput}
                            value={values.firstName}
                            readOnly
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>Last Name:</label>
                        <input
                            name="lastName"
                            className={classes.textInput}
                            value={values.lastName}
                            readOnly
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>Email:</label>
                        <input
                            name="email"
                            className={classes.textInput}
                            value={values.email}
                            readOnly
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>Password:</label>
                        <input
                            name="password"
                            className={classes.textInput}
                            value={values.password}
                            readOnly
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>Address1:</label>
                        <input
                            name="address"
                            className={classes.textInput}
                            value={values.address1}
                            readOnly
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>Extension:</label>
                        <input
                            name="extension"
                            className={classes.textInput}
                            value={values.extension}
                            readOnly
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>Country:</label>
                        <input
                            name="country"
                            className={classes.textInput}
                            value={values.country}
                            readOnly
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>State:</label>
                        <input
                            name="state"
                            className={classes.textInput}
                            value={values.state}
                            readOnly
                        />
                    </div>
                </div>

                <div className={classes.col2}>
                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>Username:</label>
                        <input
                            name="userName"
                            className={classes.textInput}
                            value={values.userName}
                            readOnly
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>Full Name:</label>
                        <input
                            name="fullName"
                            className={classes.textInput}
                            value={values.fullName}
                            readOnly
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>Phone No:</label>
                        <input
                            name="phoneNo"
                            className={classes.textInput}
                            value={values.phoneNo}
                            readOnly
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>Cell Phone:</label>
                        <input
                            name="cellPhone"
                            className={classes.textInput}
                            value={values.cellPhone}
                            readOnly
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>Create Date:</label>
                        <input
                            name="createDate"
                            className={classes.textInput}
                            value={values.createDate}
                            readOnly
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>Address2:</label>
                        <input
                            name="addressTwo"
                            className={classes.textInput}
                            value={values.addressTwo}
                            readOnly
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>City:</label>
                        <input
                            name="city"
                            className={classes.textInput}
                            value={values.city}
                            readOnly
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label className={classes.formLabel}>Zip Code:</label>
                        <input
                            name="zipCode"
                            className={classes.textInput}
                            value={values.zipCode}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasicInfo
