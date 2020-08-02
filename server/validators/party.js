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
            errorMessage: "lga field is required",
            isNumeric: {
                errorMessage: 'lga must be a valid number'
            },
            isLength: {
                errorMessage: 'lgaId length must be between 1 and 100',
                options: [{ max: 1, max: 100 }]
            }
        },
        wardId: {
            in: 'body',
            notEmpty: true,
            errorMessage: "ward field is required",
            isNumeric: {
                errorMessage: 'wardId must be a valid number'
            },
            isLength: {
                errorMessage: 'wardId length must be between 1 and 100',
                options: [{ max: 1, max: 100 }]
            }
        },
        puId: {
            in: 'body',
            notEmpty: true,
            errorMessage: "pooling unit field is required",
            isLength: {
                errorMessage: 'pooling unit length must be between 1 and 100',
                options: [{ max: 100 }]
            }
        },
        membershipStatus: {
            in: 'body',
            notEmpty: true,
            errorMessage: "membership field is required",
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
                errorMessage: "membership must be an array of integers"
            }
        },
        designation: {
            in: 'body',
            optional: { options: { nullable: true } },
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
                    return true;
                },
                errorMessage: "designation must be an array of integers"
            }
        },
        religion: {
            in: 'body',
            optional: { options: { nullable: true } },
            isLength: {
                errorMessage: 'religion length must be between 1 and 100',
                options: [{ max: 100 }]
            }
        },
        occupation: {
            in: 'body',
            optional: { options: { nullable: true } },
            isLength: {
                errorMessage: 'occupation length must be between 1 and 100',
                options: [{ max: 100 }]
            }
        },
        leader: {
            in: 'body',
            optional: { options: { nullable: true } },
            isLength: {
                errorMessage: 'leader length must be between 1 and 100',
                options: [{ max: 100 }]
            }
        },
        gender: {
            in: 'body',
            optional: { options: { nullable: true } },
            matches: {
                options: [/^male$|^female$/i, 'i'],
                errorMessage: 'gender must be either male or female'
            }
        },
    }
};
