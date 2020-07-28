export default {
    validatePartyPost: {
        firstname: {
            in: 'body',
            notEmpty: true,
            errorMessage: 'firstname is required',
            isLength: {
            errorMessage: 'length must be between 3 and 50 characters',
            options: [{ max: 50}]
            },
        },
        lastname: {
            in: 'body',
            notEmpty: true,
            errorMessage: 'lastname is required',
            isLength: {
            errorMessage: 'length must be between 3 and 50 characters',
            options: [{ max: 50}]
            },
        },
        phone: {
            in: 'body',
            optional: { options: { nullable: true } },
            isMobilePhone:{
                options: [],
                errorMessage: 'phone is required and must be a valid number format'
            },
            isLength: {
                errorMessage: 'length must not be more than 11',
                options: { max: 11 }
            },
        },
        email: {
            in: 'body',
            optional: { options: { nullable: true } },
            isEmail: {
                errorMessage: 'email must be a valid email'
            },
            isLength: {
                errorMessage: 'length must not be more than 30',
                options: { max: 30 }
            },
            normalizeEmail: true
        },
        lgaId: {
            in: 'body',
            notEmpty: true,
            errorMessage: "field is required",
            isNumeric: {
                errorMessage: 'must be a valid number'
            },
            isLength: {
                errorMessage: 'length must be between 1 and 100',
                options: [{ max: 1, max: 100 }]
            }
        },
        wardId: {
            in: 'body',
            notEmpty: true,
            errorMessage: "field is required",
            isNumeric: {
                errorMessage: 'must be a valid number'
            },
            isLength: {
                errorMessage: 'length must be between 1 and 100',
                options: [{ max: 1, max: 100 }]
            }
        },
        puId: {
            in: 'body',
            notEmpty: true,
            errorMessage: "field is required",
            isLength: {
                errorMessage: 'length must be between 1 and 100',
                options: [{ max: 100 }]
            }
        },
        membershipStatus: {
            in: 'body',
            notEmpty: true,
            errorMessage: "field is required",
            custom: {
                options: (value, { req }) => {
                    if(value && value.length) {
                        const erorvals = [];
                        value.forEach(item => {
                            if(!isFinite(item)) erorvals.push(false);
                        })

                        if(erorvals.includes(false)) return false;
                        return true;
                    }
                    return false;
                },
                errorMessage: "must be an array of integers"
            }
        },
        designation: {
            in: 'body',
            optional: { options: { nullable: true } },
            notEmpty: true,
            errorMessage: "field is required",
            custom: {
                options: (value, { req }) => {
                    if(value && value.length) {
                        const erorvals = [];
                        value.forEach(item => {
                            if(!isFinite(item)) erorvals.push(false);
                        })

                        if(erorvals.includes(false)) return false;
                        return true;
                    }
                    return false;
                },
                errorMessage: "must be an array of integers"
            }
        },
        religion: {
            in: 'body',
            optional: { options: { nullable: true } },
            isLength: {
                errorMessage: 'length must be between 1 and 100',
                options: [{ max: 100 }]
            }
        },
        occupation: {
            in: 'body',
            optional: { options: { nullable: true } },
            isLength: {
                errorMessage: 'length must be between 1 and 100',
                options: [{ max: 100 }]
            }
        },
        leader: {
            in: 'body',
            optional: { options: { nullable: true } },
            isLength: {
                errorMessage: 'length must be between 1 and 100',
                options: [{ max: 100 }]
            }
        },
        gender: {
            in: 'body',
            optional: { options: { nullable: true } },
            matches: {
                options: [/^male$|^female$/i, 'i'],
                errorMessage: 'must be either male or female'
            }
        },
    }
};
