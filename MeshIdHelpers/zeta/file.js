{
                            "label": "Customer Particulars [Joint]",
                            "key": "customerParticularsJointJs",
                            "components": [
                                {
                                    "key": "fieldSet23Js",
                                    "customConditional": "show = row.chooseType == 'individual' && row.isJointInvestment == 'yes'",
                                    "type": "fieldset",
                                    "label": "",
                                    "input": false,
                                    "tableView": false,
                                    "components": [
                                        {
                                            "label": "HTML",
                                            "attrs": [
                                                {
                                                    "attr": "",
                                                    "value": ""
                                                }
                                            ],
                                            "content": "Customer Particulars",
                                            "refreshOnChange": true,
                                            "customClass": "page-title",
                                            "key": "html11Js",
                                            "type": "htmlelement",
                                            "input": false,
                                            "tableView": false
                                        },
                                        {
                                            "key": "fieldSet14Js",
                                            "type": "fieldset",
                                            "label": "",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "Do you have any former names or other names you are known by?",
                                                    "optionsLabelPosition": "right",
                                                    "inline": true,
                                                    "tableView": false,
                                                    "values": [
                                                        {
                                                            "label": "Yes",
                                                            "value": "yes",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "No",
                                                            "value": "no",
                                                            "shortcut": ""
                                                        }
                                                    ],
                                                    "validate": {
                                                        "required": true,
                                                        "customMessage": "Any former name is required"
                                                    },
                                                    "key": "anyFormerNamesJs",
                                                    "type": "radio",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Other names",
                                                    "reorder": false,
                                                    "addAnotherPosition": "bottom",
                                                    "layoutFixed": false,
                                                    "enableRowGroups": false,
                                                    "initEmpty": false,
                                                    "hideLabel": true,
                                                    "tableView": false,
                                                    "key": "otherNamesJs",
                                                    "customConditional": "show = row.anyFormerNamesJs === 'yes'",
                                                    "type": "datagrid",
                                                    "input": true,
                                                    "components": [
                                                        {
                                                            "label": "Previous/Other Name",
                                                            "tableView": true,
                                                            "customDefaultValue": "if(row.MID_NP_Former_First){\nvalue = row.MID_NP_Former_First + ' ' + row.MID_NP_Former_Last\n}",
                                                            "validate": {
                                                                "required": true
                                                            },
                                                            "key": "formerNameJs",
                                                            "type": "textfield",
                                                            "input": true
                                                        },
                                                        {
                                                            "label": "Reason for previous name/other name",
                                                            "tableView": true,
                                                            "customDefaultValue": "if(row.MID_NP_Former_First){\nvalue = row.MID_NP_Former_First + ' ' + row.MID_NP_Former_Last\n}",
                                                            "validate": {
                                                                "required": true
                                                            },
                                                            "key": "otherReasonJs",
                                                            "type": "textfield",
                                                            "input": true
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "Occupation",
                                                    "tableView": true,
                                                    "customDefaultValue": "value = row.MID_NP_Occupation",
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "occupationJs",
                                                    "type": "textfield",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Employer",
                                                    "tableView": true,
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "employerJs",
                                                    "type": "textfield",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Contact Email Address",
                                                    "description": "Please note that this email address will be used for investor communication and the distribution of contract notes and statements.",
                                                    "tableView": true,
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "contactEmailAddressJs",
                                                    "type": "email",
                                                    "input": true
                                                },
                                                {
                                                    "customClass": "custom-droptext",
                                                    "key": "fieldsetIJs",
                                                    "type": "fieldset",
                                                    "label": "Text Field",
                                                    "tableView": true,
                                                    "input": true,
                                                    "components": [
                                                        {
                                                            "label": "Contact Phone Number",
                                                            "description": "Please note that the Administrator will contact the investor through email by default.",
                                                            "customClass": "formio-component-number",
                                                            "tableView": false,
                                                            "validate": {
                                                                "required": true,
                                                                "pattern": "^\\d+$",
                                                                "customMessage": "Please enter a valid phone number"
                                                            },
                                                            "key": "contactPhoneNumberJs",
                                                            "type": "textfield",
                                                            "input": true
                                                        },
                                                        {
                                                            "label": "Country Code",
                                                            "widget": "choicesjs",
                                                            "hideLabel": true,
                                                            "uniqueOptions": true,
                                                            "tableView": true,
                                                            "dataSrc": "json",
                                                            "data": {
                                                                "json": {
                                                                    "AF": {
                                                                        "name": "Afghanistan",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Kabul": "+04:30"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AF",
                                                                            "alpha-3": "AFG",
                                                                            "numeric": "004"
                                                                        },
                                                                        "phone": [
                                                                            "+93"
                                                                        ],
                                                                        "emoji": "🇦🇫",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg"
                                                                    },
                                                                    "AL": {
                                                                        "name": "Albania",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Tirane": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AL",
                                                                            "alpha-3": "ALB",
                                                                            "numeric": "008"
                                                                        },
                                                                        "phone": [
                                                                            "+355"
                                                                        ],
                                                                        "emoji": "🇦🇱",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg"
                                                                    },
                                                                    "DZ": {
                                                                        "name": "Algeria",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Algiers": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "DZ",
                                                                            "alpha-3": "DZA",
                                                                            "numeric": "012"
                                                                        },
                                                                        "phone": [
                                                                            "+213"
                                                                        ],
                                                                        "emoji": "🇩🇿",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg"
                                                                    },
                                                                    "AS": {
                                                                        "name": "American Samoa",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Pago_Pago": "-11:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AS",
                                                                            "alpha-3": "ASM",
                                                                            "numeric": "016"
                                                                        },
                                                                        "phone": [
                                                                            "+1-684"
                                                                        ],
                                                                        "emoji": "🇦🇸",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg"
                                                                    },
                                                                    "AD": {
                                                                        "name": "Andorra",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Andorra": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AD",
                                                                            "alpha-3": "AND",
                                                                            "numeric": "020"
                                                                        },
                                                                        "phone": [
                                                                            "+376"
                                                                        ],
                                                                        "emoji": "🇦🇩",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg"
                                                                    },
                                                                    "AO": {
                                                                        "name": "Angola",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Luanda": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AO",
                                                                            "alpha-3": "AGO",
                                                                            "numeric": "024"
                                                                        },
                                                                        "phone": [
                                                                            "+244"
                                                                        ],
                                                                        "emoji": "🇦🇴",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg"
                                                                    },
                                                                    "AI": {
                                                                        "name": "Anguilla",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Anguilla": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AI",
                                                                            "alpha-3": "AIA",
                                                                            "numeric": "660"
                                                                        },
                                                                        "phone": [
                                                                            "+1-264"
                                                                        ],
                                                                        "emoji": "🇦🇮",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg"
                                                                    },
                                                                    "AQ": {
                                                                        "name": "Antarctica",
                                                                        "region": "",
                                                                        "timezones": {
                                                                            "Antarctica/Casey": "+11:00",
                                                                            "Antarctica/Davis": "+07:00",
                                                                            "Antarctica/DumontDUrville": "+10:00",
                                                                            "Antarctica/Mawson": "+05:00",
                                                                            "Antarctica/McMurdo": "+12:00",
                                                                            "Antarctica/Palmer": "-03:00",
                                                                            "Antarctica/Rothera": "-03:00",
                                                                            "Antarctica/Syowa": "+03:00",
                                                                            "Antarctica/Troll": "+02:00",
                                                                            "Antarctica/Vostok": "+06:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AQ",
                                                                            "alpha-3": "ATA",
                                                                            "numeric": "010"
                                                                        },
                                                                        "phone": [
                                                                            "+"
                                                                        ],
                                                                        "emoji": "🇦🇶",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg"
                                                                    },
                                                                    "AG": {
                                                                        "name": "Antigua and Barbuda",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Antigua": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AG",
                                                                            "alpha-3": "ATG",
                                                                            "numeric": "028"
                                                                        },
                                                                        "phone": [
                                                                            "+1-268"
                                                                        ],
                                                                        "emoji": "🇦🇬",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg"
                                                                    },
                                                                    "AR": {
                                                                        "name": "Argentina",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Argentina/Buenos_Aires": "-03:00",
                                                                            "America/Argentina/Catamarca": "-03:00",
                                                                            "America/Argentina/Cordoba": "-03:00",
                                                                            "America/Argentina/Jujuy": "-03:00",
                                                                            "America/Argentina/La_Rioja": "-03:00",
                                                                            "America/Argentina/Mendoza": "-03:00",
                                                                            "America/Argentina/Rio_Gallegos": "-03:00",
                                                                            "America/Argentina/Salta": "-03:00",
                                                                            "America/Argentina/San_Juan": "-03:00",
                                                                            "America/Argentina/San_Luis": "-03:00",
                                                                            "America/Argentina/Tucuman": "-03:00",
                                                                            "America/Argentina/Ushuaia": "-03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AR",
                                                                            "alpha-3": "ARG",
                                                                            "numeric": "032"
                                                                        },
                                                                        "phone": [
                                                                            "+54"
                                                                        ],
                                                                        "emoji": "🇦🇷",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg"
                                                                    },
                                                                    "AM": {
                                                                        "name": "Armenia",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Yerevan": "+04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AM",
                                                                            "alpha-3": "ARM",
                                                                            "numeric": "051"
                                                                        },
                                                                        "phone": [
                                                                            "+374"
                                                                        ],
                                                                        "emoji": "🇦🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg"
                                                                    },
                                                                    "AW": {
                                                                        "name": "Aruba",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Aruba": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AW",
                                                                            "alpha-3": "ABW",
                                                                            "numeric": "533"
                                                                        },
                                                                        "phone": [
                                                                            "+297"
                                                                        ],
                                                                        "emoji": "🇦🇼",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg"
                                                                    },
                                                                    "AU": {
                                                                        "name": "Australia",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Antarctica/Macquarie": "+10:00",
                                                                            "Australia/Adelaide": "+09:30",
                                                                            "Australia/Brisbane": "+10:00",
                                                                            "Australia/Broken_Hill": "+09:30",
                                                                            "Australia/Darwin": "+09:30",
                                                                            "Australia/Eucla": "+08:45",
                                                                            "Australia/Hobart": "+10:00",
                                                                            "Australia/Lindeman": "+10:00",
                                                                            "Australia/Lord_Howe": "+10:30",
                                                                            "Australia/Melbourne": "+10:00",
                                                                            "Australia/Perth": "+08:00",
                                                                            "Australia/Sydney": "+10:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AU",
                                                                            "alpha-3": "AUS",
                                                                            "numeric": "036"
                                                                        },
                                                                        "phone": [
                                                                            "+61"
                                                                        ],
                                                                        "emoji": "🇦🇺",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg"
                                                                    },
                                                                    "AT": {
                                                                        "name": "Austria",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Vienna": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AT",
                                                                            "alpha-3": "AUT",
                                                                            "numeric": "040"
                                                                        },
                                                                        "phone": [
                                                                            "+43"
                                                                        ],
                                                                        "emoji": "🇦🇹",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg"
                                                                    },
                                                                    "AZ": {
                                                                        "name": "Azerbaijan",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Baku": "+04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AZ",
                                                                            "alpha-3": "AZE",
                                                                            "numeric": "031"
                                                                        },
                                                                        "phone": [
                                                                            "+994"
                                                                        ],
                                                                        "emoji": "🇦🇿",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg"
                                                                    },
                                                                    "BS": {
                                                                        "name": "Bahamas",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Nassau": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BS",
                                                                            "alpha-3": "BHS",
                                                                            "numeric": "044"
                                                                        },
                                                                        "phone": [
                                                                            "+1-242"
                                                                        ],
                                                                        "emoji": "🇧🇸",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg"
                                                                    },
                                                                    "BH": {
                                                                        "name": "Bahrain",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Bahrain": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BH",
                                                                            "alpha-3": "BHR",
                                                                            "numeric": "048"
                                                                        },
                                                                        "phone": [
                                                                            "+973"
                                                                        ],
                                                                        "emoji": "🇧🇭",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg"
                                                                    },
                                                                    "BD": {
                                                                        "name": "Bangladesh",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Dhaka": "+06:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BD",
                                                                            "alpha-3": "BGD",
                                                                            "numeric": "050"
                                                                        },
                                                                        "phone": [
                                                                            "+880"
                                                                        ],
                                                                        "emoji": "🇧🇩",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg"
                                                                    },
                                                                    "BB": {
                                                                        "name": "Barbados",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Barbados": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BB",
                                                                            "alpha-3": "BRB",
                                                                            "numeric": "052"
                                                                        },
                                                                        "phone": [
                                                                            "+1-246"
                                                                        ],
                                                                        "emoji": "🇧🇧",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg"
                                                                    },
                                                                    "BY": {
                                                                        "name": "Belarus",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Minsk": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BY",
                                                                            "alpha-3": "BLR",
                                                                            "numeric": "112"
                                                                        },
                                                                        "phone": [
                                                                            "+375"
                                                                        ],
                                                                        "emoji": "🇧🇾",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg"
                                                                    },
                                                                    "BE": {
                                                                        "name": "Belgium",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Brussels": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BE",
                                                                            "alpha-3": "BEL",
                                                                            "numeric": "056"
                                                                        },
                                                                        "phone": [
                                                                            "+32"
                                                                        ],
                                                                        "emoji": "🇧🇪",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg"
                                                                    },
                                                                    "BZ": {
                                                                        "name": "Belize",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Belize": "-06:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BZ",
                                                                            "alpha-3": "BLZ",
                                                                            "numeric": "084"
                                                                        },
                                                                        "phone": [
                                                                            "+501"
                                                                        ],
                                                                        "emoji": "🇧🇿",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg"
                                                                    },
                                                                    "BJ": {
                                                                        "name": "Benin",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Porto-Novo": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BJ",
                                                                            "alpha-3": "BEN",
                                                                            "numeric": "204"
                                                                        },
                                                                        "phone": [
                                                                            "+229"
                                                                        ],
                                                                        "emoji": "🇧🇯",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg"
                                                                    },
                                                                    "BM": {
                                                                        "name": "Bermuda",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "Atlantic/Bermuda": "-03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BM",
                                                                            "alpha-3": "BMU",
                                                                            "numeric": "060"
                                                                        },
                                                                        "phone": [
                                                                            "+1-441"
                                                                        ],
                                                                        "emoji": "🇧🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg"
                                                                    },
                                                                    "BT": {
                                                                        "name": "Bhutan",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Thimphu": "+06:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BT",
                                                                            "alpha-3": "BTN",
                                                                            "numeric": "064"
                                                                        },
                                                                        "phone": [
                                                                            "+975"
                                                                        ],
                                                                        "emoji": "🇧🇹",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg"
                                                                    },
                                                                    "BO": {
                                                                        "name": "Bolivia, Plurinational State of",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/La_Paz": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BO",
                                                                            "alpha-3": "BOL",
                                                                            "numeric": "068"
                                                                        },
                                                                        "phone": [
                                                                            "+591"
                                                                        ],
                                                                        "emoji": "🇧🇴",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg"
                                                                    },
                                                                    "BQ": {
                                                                        "name": "Bonaire, Sint Eustatius and Saba",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Kralendijk": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BQ",
                                                                            "alpha-3": "BES",
                                                                            "numeric": "535"
                                                                        },
                                                                        "phone": [
                                                                            "+599"
                                                                        ],
                                                                        "emoji": "🇧🇶",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BQ.svg"
                                                                    },
                                                                    "BA": {
                                                                        "name": "Bosnia and Herzegovina",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Sarajevo": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BA",
                                                                            "alpha-3": "BIH",
                                                                            "numeric": "070"
                                                                        },
                                                                        "phone": [
                                                                            "+387"
                                                                        ],
                                                                        "emoji": "🇧🇦",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg"
                                                                    },
                                                                    "BW": {
                                                                        "name": "Botswana",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Gaborone": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BW",
                                                                            "alpha-3": "BWA",
                                                                            "numeric": "072"
                                                                        },
                                                                        "phone": [
                                                                            "+267"
                                                                        ],
                                                                        "emoji": "🇧🇼",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg"
                                                                    },
                                                                    "BR": {
                                                                        "name": "Brazil",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Araguaina": "-03:00",
                                                                            "America/Bahia": "-03:00",
                                                                            "America/Belem": "-03:00",
                                                                            "America/Boa_Vista": "-04:00",
                                                                            "America/Campo_Grande": "-04:00",
                                                                            "America/Cuiaba": "-04:00",
                                                                            "America/Eirunepe": "-05:00",
                                                                            "America/Fortaleza": "-03:00",
                                                                            "America/Maceio": "-03:00",
                                                                            "America/Manaus": "-04:00",
                                                                            "America/Noronha": "-02:00",
                                                                            "America/Porto_Velho": "-04:00",
                                                                            "America/Recife": "-03:00",
                                                                            "America/Rio_Branco": "-05:00",
                                                                            "America/Santarem": "-03:00",
                                                                            "America/Sao_Paulo": "-03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BR",
                                                                            "alpha-3": "BRA",
                                                                            "numeric": "076"
                                                                        },
                                                                        "phone": [
                                                                            "+55"
                                                                        ],
                                                                        "emoji": "🇧🇷",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg"
                                                                    },
                                                                    "IO": {
                                                                        "name": "British Indian Ocean Territory",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Indian/Chagos": "+06:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "IO",
                                                                            "alpha-3": "IOT",
                                                                            "numeric": "086"
                                                                        },
                                                                        "phone": [
                                                                            "+246"
                                                                        ],
                                                                        "emoji": "🇮🇴",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg"
                                                                    },
                                                                    "BN": {
                                                                        "name": "Brunei Darussalam",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Brunei": "+08:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BN",
                                                                            "alpha-3": "BRN",
                                                                            "numeric": "096"
                                                                        },
                                                                        "phone": [
                                                                            "+673"
                                                                        ],
                                                                        "emoji": "🇧🇳",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg"
                                                                    },
                                                                    "BG": {
                                                                        "name": "Bulgaria",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Sofia": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BG",
                                                                            "alpha-3": "BGR",
                                                                            "numeric": "100"
                                                                        },
                                                                        "phone": [
                                                                            "+359"
                                                                        ],
                                                                        "emoji": "🇧🇬",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg"
                                                                    },
                                                                    "BF": {
                                                                        "name": "Burkina Faso",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Ouagadougou": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BF",
                                                                            "alpha-3": "BFA",
                                                                            "numeric": "854"
                                                                        },
                                                                        "phone": [
                                                                            "+226"
                                                                        ],
                                                                        "emoji": "🇧🇫",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg"
                                                                    },
                                                                    "BI": {
                                                                        "name": "Burundi",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Bujumbura": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BI",
                                                                            "alpha-3": "BDI",
                                                                            "numeric": "108"
                                                                        },
                                                                        "phone": [
                                                                            "+257"
                                                                        ],
                                                                        "emoji": "🇧🇮",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg"
                                                                    },
                                                                    "KH": {
                                                                        "name": "Cambodia",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Phnom_Penh": "+07:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "KH",
                                                                            "alpha-3": "KHM",
                                                                            "numeric": "116"
                                                                        },
                                                                        "phone": [
                                                                            "+855"
                                                                        ],
                                                                        "emoji": "🇰🇭",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg"
                                                                    },
                                                                    "CM": {
                                                                        "name": "Cameroon",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Douala": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CM",
                                                                            "alpha-3": "CMR",
                                                                            "numeric": "120"
                                                                        },
                                                                        "phone": [
                                                                            "+237"
                                                                        ],
                                                                        "emoji": "🇨🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg"
                                                                    },
                                                                    "CA": {
                                                                        "name": "Canada",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Atikokan": "-05:00",
                                                                            "America/Blanc-Sablon": "-04:00",
                                                                            "America/Cambridge_Bay": "-06:00",
                                                                            "America/Creston": "-07:00",
                                                                            "America/Dawson": "-07:00",
                                                                            "America/Dawson_Creek": "-07:00",
                                                                            "America/Edmonton": "-06:00",
                                                                            "America/Fort_Nelson": "-07:00",
                                                                            "America/Glace_Bay": "-03:00",
                                                                            "America/Goose_Bay": "-03:00",
                                                                            "America/Halifax": "-03:00",
                                                                            "America/Inuvik": "-06:00",
                                                                            "America/Iqaluit": "-04:00",
                                                                            "America/Moncton": "-03:00",
                                                                            "America/Rankin_Inlet": "-05:00",
                                                                            "America/Regina": "-06:00",
                                                                            "America/Resolute": "-05:00",
                                                                            "America/St_Johns": "-02:30",
                                                                            "America/Swift_Current": "-06:00",
                                                                            "America/Toronto": "-04:00",
                                                                            "America/Vancouver": "-07:00",
                                                                            "America/Whitehorse": "-07:00",
                                                                            "America/Winnipeg": "-05:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CA",
                                                                            "alpha-3": "CAN",
                                                                            "numeric": "124"
                                                                        },
                                                                        "phone": [
                                                                            "+1"
                                                                        ],
                                                                        "emoji": "🇨🇦",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg"
                                                                    },
                                                                    "CV": {
                                                                        "name": "Cape Verde",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Atlantic/Cape_Verde": "-01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CV",
                                                                            "alpha-3": "CPV",
                                                                            "numeric": "132"
                                                                        },
                                                                        "phone": [
                                                                            "+238"
                                                                        ],
                                                                        "emoji": "🇨🇻",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg"
                                                                    },
                                                                    "KY": {
                                                                        "name": "Cayman Islands",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Cayman": "-05:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "KY",
                                                                            "alpha-3": "CYM",
                                                                            "numeric": "136"
                                                                        },
                                                                        "phone": [
                                                                            "+1-345"
                                                                        ],
                                                                        "emoji": "🇰🇾",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg"
                                                                    },
                                                                    "CF": {
                                                                        "name": "Central African Republic",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Bangui": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CF",
                                                                            "alpha-3": "CAF",
                                                                            "numeric": "140"
                                                                        },
                                                                        "phone": [
                                                                            "+236"
                                                                        ],
                                                                        "emoji": "🇨🇫",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg"
                                                                    },
                                                                    "TD": {
                                                                        "name": "Chad",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Ndjamena": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TD",
                                                                            "alpha-3": "TCD",
                                                                            "numeric": "148"
                                                                        },
                                                                        "phone": [
                                                                            "+235"
                                                                        ],
                                                                        "emoji": "🇹🇩",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg"
                                                                    },
                                                                    "CL": {
                                                                        "name": "Chile",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Punta_Arenas": "-03:00",
                                                                            "America/Santiago": "-04:00",
                                                                            "Pacific/Easter": "-06:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CL",
                                                                            "alpha-3": "CHL",
                                                                            "numeric": "152"
                                                                        },
                                                                        "phone": [
                                                                            "+56"
                                                                        ],
                                                                        "emoji": "🇨🇱",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg"
                                                                    },
                                                                    "CN": {
                                                                        "name": "China",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Shanghai": "+08:00",
                                                                            "Asia/Urumqi": "+06:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CN",
                                                                            "alpha-3": "CHN",
                                                                            "numeric": "156"
                                                                        },
                                                                        "phone": [
                                                                            "+86"
                                                                        ],
                                                                        "emoji": "🇨🇳",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg"
                                                                    },
                                                                    "CX": {
                                                                        "name": "Christmas Island",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Indian/Christmas": "+07:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CX",
                                                                            "alpha-3": "CXR",
                                                                            "numeric": "162"
                                                                        },
                                                                        "phone": [
                                                                            "+61"
                                                                        ],
                                                                        "emoji": "🇨🇽",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg"
                                                                    },
                                                                    "CC": {
                                                                        "name": "Cocos (Keeling) Islands",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Indian/Cocos": "+06:30"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CC",
                                                                            "alpha-3": "CCK",
                                                                            "numeric": "166"
                                                                        },
                                                                        "phone": [
                                                                            "+61"
                                                                        ],
                                                                        "emoji": "🇨🇨",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg"
                                                                    },
                                                                    "CO": {
                                                                        "name": "Colombia",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Bogota": "-05:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CO",
                                                                            "alpha-3": "COL",
                                                                            "numeric": "170"
                                                                        },
                                                                        "phone": [
                                                                            "+57"
                                                                        ],
                                                                        "emoji": "🇨🇴",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg"
                                                                    },
                                                                    "KM": {
                                                                        "name": "Comoros",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Indian/Comoro": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "KM",
                                                                            "alpha-3": "COM",
                                                                            "numeric": "174"
                                                                        },
                                                                        "phone": [
                                                                            "+269"
                                                                        ],
                                                                        "emoji": "🇰🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg"
                                                                    },
                                                                    "CG": {
                                                                        "name": "Congo",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Brazzaville": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CG",
                                                                            "alpha-3": "COG",
                                                                            "numeric": "178"
                                                                        },
                                                                        "phone": [
                                                                            "+242"
                                                                        ],
                                                                        "emoji": "🇨🇬",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg"
                                                                    },
                                                                    "CD": {
                                                                        "name": "Congo, the Democratic Republic of the",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Kinshasa": "+01:00",
                                                                            "Africa/Lubumbashi": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CD",
                                                                            "alpha-3": "COD",
                                                                            "numeric": "180"
                                                                        },
                                                                        "phone": [
                                                                            "+243"
                                                                        ],
                                                                        "emoji": "🇨🇩",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg"
                                                                    },
                                                                    "CK": {
                                                                        "name": "Cook Islands",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Rarotonga": "-10:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CK",
                                                                            "alpha-3": "COK",
                                                                            "numeric": "184"
                                                                        },
                                                                        "phone": [
                                                                            "+682"
                                                                        ],
                                                                        "emoji": "🇨🇰",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg"
                                                                    },
                                                                    "CR": {
                                                                        "name": "Costa Rica",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Costa_Rica": "-06:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CR",
                                                                            "alpha-3": "CRI",
                                                                            "numeric": "188"
                                                                        },
                                                                        "phone": [
                                                                            "+506"
                                                                        ],
                                                                        "emoji": "🇨🇷",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg"
                                                                    },
                                                                    "HR": {
                                                                        "name": "Croatia",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Zagreb": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "HR",
                                                                            "alpha-3": "HRV",
                                                                            "numeric": "191"
                                                                        },
                                                                        "phone": [
                                                                            "+385"
                                                                        ],
                                                                        "emoji": "🇭🇷",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg"
                                                                    },
                                                                    "CU": {
                                                                        "name": "Cuba",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Havana": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CU",
                                                                            "alpha-3": "CUB",
                                                                            "numeric": "192"
                                                                        },
                                                                        "phone": [
                                                                            "+53"
                                                                        ],
                                                                        "emoji": "🇨🇺",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg"
                                                                    },
                                                                    "CW": {
                                                                        "name": "Curaçao",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Curacao": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CW",
                                                                            "alpha-3": "CUW",
                                                                            "numeric": "531"
                                                                        },
                                                                        "phone": [
                                                                            "+599"
                                                                        ],
                                                                        "emoji": "🇨🇼",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CW.svg"
                                                                    },
                                                                    "CY": {
                                                                        "name": "Cyprus",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Famagusta": "+03:00",
                                                                            "Asia/Nicosia": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CY",
                                                                            "alpha-3": "CYP",
                                                                            "numeric": "196"
                                                                        },
                                                                        "phone": [
                                                                            "+357"
                                                                        ],
                                                                        "emoji": "🇨🇾",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg"
                                                                    },
                                                                    "CZ": {
                                                                        "name": "Czech Republic",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Prague": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CZ",
                                                                            "alpha-3": "CZE",
                                                                            "numeric": "203"
                                                                        },
                                                                        "phone": [
                                                                            "+420"
                                                                        ],
                                                                        "emoji": "🇨🇿",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg"
                                                                    },
                                                                    "CI": {
                                                                        "name": "Côte d'Ivoire",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Abidjan": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CI",
                                                                            "alpha-3": "CIV",
                                                                            "numeric": "384"
                                                                        },
                                                                        "phone": [
                                                                            "+225"
                                                                        ],
                                                                        "emoji": "🇨🇮",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg"
                                                                    },
                                                                    "DK": {
                                                                        "name": "Denmark",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Copenhagen": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "DK",
                                                                            "alpha-3": "DNK",
                                                                            "numeric": "208"
                                                                        },
                                                                        "phone": [
                                                                            "+45"
                                                                        ],
                                                                        "emoji": "🇩🇰",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg"
                                                                    },
                                                                    "DJ": {
                                                                        "name": "Djibouti",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Djibouti": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "DJ",
                                                                            "alpha-3": "DJI",
                                                                            "numeric": "262"
                                                                        },
                                                                        "phone": [
                                                                            "+253"
                                                                        ],
                                                                        "emoji": "🇩🇯",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg"
                                                                    },
                                                                    "DM": {
                                                                        "name": "Dominica",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Dominica": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "DM",
                                                                            "alpha-3": "DMA",
                                                                            "numeric": "212"
                                                                        },
                                                                        "phone": [
                                                                            "+1-767"
                                                                        ],
                                                                        "emoji": "🇩🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg"
                                                                    },
                                                                    "DO": {
                                                                        "name": "Dominican Republic",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Santo_Domingo": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "DO",
                                                                            "alpha-3": "DOM",
                                                                            "numeric": "214"
                                                                        },
                                                                        "phone": [
                                                                            "+1-809",
                                                                            "+1-829"
                                                                        ],
                                                                        "emoji": "🇩🇴",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg"
                                                                    },
                                                                    "EC": {
                                                                        "name": "Ecuador",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Guayaquil": "-05:00",
                                                                            "Pacific/Galapagos": "-06:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "EC",
                                                                            "alpha-3": "ECU",
                                                                            "numeric": "218"
                                                                        },
                                                                        "phone": [
                                                                            "+593"
                                                                        ],
                                                                        "emoji": "🇪🇨",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg"
                                                                    },
                                                                    "EG": {
                                                                        "name": "Egypt",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Cairo": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "EG",
                                                                            "alpha-3": "EGY",
                                                                            "numeric": "818"
                                                                        },
                                                                        "phone": [
                                                                            "+20"
                                                                        ],
                                                                        "emoji": "🇪🇬",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg"
                                                                    },
                                                                    "SV": {
                                                                        "name": "El Salvador",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/El_Salvador": "-06:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SV",
                                                                            "alpha-3": "SLV",
                                                                            "numeric": "222"
                                                                        },
                                                                        "phone": [
                                                                            "+503"
                                                                        ],
                                                                        "emoji": "🇸🇻",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg"
                                                                    },
                                                                    "GQ": {
                                                                        "name": "Equatorial Guinea",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Malabo": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GQ",
                                                                            "alpha-3": "GNQ",
                                                                            "numeric": "226"
                                                                        },
                                                                        "phone": [
                                                                            "+240"
                                                                        ],
                                                                        "emoji": "🇬🇶",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg"
                                                                    },
                                                                    "ER": {
                                                                        "name": "Eritrea",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Asmara": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "ER",
                                                                            "alpha-3": "ERI",
                                                                            "numeric": "232"
                                                                        },
                                                                        "phone": [
                                                                            "+291"
                                                                        ],
                                                                        "emoji": "🇪🇷",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg"
                                                                    },
                                                                    "EE": {
                                                                        "name": "Estonia",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Tallinn": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "EE",
                                                                            "alpha-3": "EST",
                                                                            "numeric": "233"
                                                                        },
                                                                        "phone": [
                                                                            "+372"
                                                                        ],
                                                                        "emoji": "🇪🇪",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg"
                                                                    },
                                                                    "ET": {
                                                                        "name": "Ethiopia",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Addis_Ababa": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "ET",
                                                                            "alpha-3": "ETH",
                                                                            "numeric": "231"
                                                                        },
                                                                        "phone": [
                                                                            "+251"
                                                                        ],
                                                                        "emoji": "🇪🇹",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg"
                                                                    },
                                                                    "FK": {
                                                                        "name": "Falkland Islands (Malvinas)",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "Atlantic/Stanley": "-03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "FK",
                                                                            "alpha-3": "FLK",
                                                                            "numeric": "238"
                                                                        },
                                                                        "phone": [
                                                                            "+500"
                                                                        ],
                                                                        "emoji": "🇫🇰",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg"
                                                                    },
                                                                    "FO": {
                                                                        "name": "Faroe Islands",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Atlantic/Faroe": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "FO",
                                                                            "alpha-3": "FRO",
                                                                            "numeric": "234"
                                                                        },
                                                                        "phone": [
                                                                            "+298"
                                                                        ],
                                                                        "emoji": "🇫🇴",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg"
                                                                    },
                                                                    "FJ": {
                                                                        "name": "Fiji",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Fiji": "+12:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "FJ",
                                                                            "alpha-3": "FJI",
                                                                            "numeric": "242"
                                                                        },
                                                                        "phone": [
                                                                            "+679"
                                                                        ],
                                                                        "emoji": "🇫🇯",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg"
                                                                    },
                                                                    "FI": {
                                                                        "name": "Finland",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Helsinki": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "FI",
                                                                            "alpha-3": "FIN",
                                                                            "numeric": "246"
                                                                        },
                                                                        "phone": [
                                                                            "+358"
                                                                        ],
                                                                        "emoji": "🇫🇮",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg"
                                                                    },
                                                                    "FR": {
                                                                        "name": "France",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Paris": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "FR",
                                                                            "alpha-3": "FRA",
                                                                            "numeric": "250"
                                                                        },
                                                                        "phone": [
                                                                            "+33"
                                                                        ],
                                                                        "emoji": "🇫🇷",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg"
                                                                    },
                                                                    "GF": {
                                                                        "name": "French Guiana",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Cayenne": "-03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GF",
                                                                            "alpha-3": "GUF",
                                                                            "numeric": "254"
                                                                        },
                                                                        "phone": [
                                                                            "+594"
                                                                        ],
                                                                        "emoji": "🇬🇫",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg"
                                                                    },
                                                                    "PF": {
                                                                        "name": "French Polynesia",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Gambier": "-09:00",
                                                                            "Pacific/Marquesas": "-09:30",
                                                                            "Pacific/Tahiti": "-10:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "PF",
                                                                            "alpha-3": "PYF",
                                                                            "numeric": "258"
                                                                        },
                                                                        "phone": [
                                                                            "+689"
                                                                        ],
                                                                        "emoji": "🇵🇫",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg"
                                                                    },
                                                                    "TF": {
                                                                        "name": "French Southern Territories",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Indian/Kerguelen": "+05:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TF",
                                                                            "alpha-3": "ATF",
                                                                            "numeric": "260"
                                                                        },
                                                                        "phone": [
                                                                            "+"
                                                                        ],
                                                                        "emoji": "🇹🇫",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TF.svg"
                                                                    },
                                                                    "GA": {
                                                                        "name": "Gabon",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Libreville": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GA",
                                                                            "alpha-3": "GAB",
                                                                            "numeric": "266"
                                                                        },
                                                                        "phone": [
                                                                            "+241"
                                                                        ],
                                                                        "emoji": "🇬🇦",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg"
                                                                    },
                                                                    "GM": {
                                                                        "name": "Gambia",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Banjul": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GM",
                                                                            "alpha-3": "GMB",
                                                                            "numeric": "270"
                                                                        },
                                                                        "phone": [
                                                                            "+220"
                                                                        ],
                                                                        "emoji": "🇬🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg"
                                                                    },
                                                                    "GE": {
                                                                        "name": "Georgia",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Tbilisi": "+04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GE",
                                                                            "alpha-3": "GEO",
                                                                            "numeric": "268"
                                                                        },
                                                                        "phone": [
                                                                            "+995"
                                                                        ],
                                                                        "emoji": "🇬🇪",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg"
                                                                    },
                                                                    "DE": {
                                                                        "name": "Germany",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Berlin": "+02:00",
                                                                            "Europe/Busingen": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "DE",
                                                                            "alpha-3": "DEU",
                                                                            "numeric": "276"
                                                                        },
                                                                        "phone": [
                                                                            "+49"
                                                                        ],
                                                                        "emoji": "🇩🇪",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg"
                                                                    },
                                                                    "GH": {
                                                                        "name": "Ghana",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Accra": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GH",
                                                                            "alpha-3": "GHA",
                                                                            "numeric": "288"
                                                                        },
                                                                        "phone": [
                                                                            "+233"
                                                                        ],
                                                                        "emoji": "🇬🇭",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg"
                                                                    },
                                                                    "GI": {
                                                                        "name": "Gibraltar",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Gibraltar": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GI",
                                                                            "alpha-3": "GIB",
                                                                            "numeric": "292"
                                                                        },
                                                                        "phone": [
                                                                            "+350"
                                                                        ],
                                                                        "emoji": "🇬🇮",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg"
                                                                    },
                                                                    "GR": {
                                                                        "name": "Greece",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Athens": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GR",
                                                                            "alpha-3": "GRC",
                                                                            "numeric": "300"
                                                                        },
                                                                        "phone": [
                                                                            "+30"
                                                                        ],
                                                                        "emoji": "🇬🇷",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg"
                                                                    },
                                                                    "GL": {
                                                                        "name": "Greenland",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Danmarkshavn": "+00:00",
                                                                            "America/Nuuk": "-02:00",
                                                                            "America/Scoresbysund": "+00:00",
                                                                            "America/Thule": "-03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GL",
                                                                            "alpha-3": "GRL",
                                                                            "numeric": "304"
                                                                        },
                                                                        "phone": [
                                                                            "+299"
                                                                        ],
                                                                        "emoji": "🇬🇱",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg"
                                                                    },
                                                                    "GD": {
                                                                        "name": "Grenada",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Grenada": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GD",
                                                                            "alpha-3": "GRD",
                                                                            "numeric": "308"
                                                                        },
                                                                        "phone": [
                                                                            "+1-473"
                                                                        ],
                                                                        "emoji": "🇬🇩",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg"
                                                                    },
                                                                    "GP": {
                                                                        "name": "Guadeloupe",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Guadeloupe": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GP",
                                                                            "alpha-3": "GLP",
                                                                            "numeric": "312"
                                                                        },
                                                                        "phone": [
                                                                            "+590"
                                                                        ],
                                                                        "emoji": "🇬🇵",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg"
                                                                    },
                                                                    "GU": {
                                                                        "name": "Guam",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Guam": "+10:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GU",
                                                                            "alpha-3": "GUM",
                                                                            "numeric": "316"
                                                                        },
                                                                        "phone": [
                                                                            "+1-671"
                                                                        ],
                                                                        "emoji": "🇬🇺",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg"
                                                                    },
                                                                    "GT": {
                                                                        "name": "Guatemala",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Guatemala": "-06:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GT",
                                                                            "alpha-3": "GTM",
                                                                            "numeric": "320"
                                                                        },
                                                                        "phone": [
                                                                            "+502"
                                                                        ],
                                                                        "emoji": "🇬🇹",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg"
                                                                    },
                                                                    "GG": {
                                                                        "name": "Guernsey",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Guernsey": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GG",
                                                                            "alpha-3": "GGY",
                                                                            "numeric": "831"
                                                                        },
                                                                        "phone": [
                                                                            "+44-1481"
                                                                        ],
                                                                        "emoji": "🇬🇬",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg"
                                                                    },
                                                                    "GN": {
                                                                        "name": "Guinea",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Conakry": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GN",
                                                                            "alpha-3": "GIN",
                                                                            "numeric": "324"
                                                                        },
                                                                        "phone": [
                                                                            "+224"
                                                                        ],
                                                                        "emoji": "🇬🇳",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg"
                                                                    },
                                                                    "GW": {
                                                                        "name": "Guinea-Bissau",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Bissau": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GW",
                                                                            "alpha-3": "GNB",
                                                                            "numeric": "624"
                                                                        },
                                                                        "phone": [
                                                                            "+245"
                                                                        ],
                                                                        "emoji": "🇬🇼",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg"
                                                                    },
                                                                    "GY": {
                                                                        "name": "Guyana",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Guyana": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GY",
                                                                            "alpha-3": "GUY",
                                                                            "numeric": "328"
                                                                        },
                                                                        "phone": [
                                                                            "+592"
                                                                        ],
                                                                        "emoji": "🇬🇾",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg"
                                                                    },
                                                                    "HT": {
                                                                        "name": "Haiti",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Port-au-Prince": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "HT",
                                                                            "alpha-3": "HTI",
                                                                            "numeric": "332"
                                                                        },
                                                                        "phone": [
                                                                            "+509"
                                                                        ],
                                                                        "emoji": "🇭🇹",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg"
                                                                    },
                                                                    "VA": {
                                                                        "name": "Holy See (Vatican City State)",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Vatican": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "VA",
                                                                            "alpha-3": "VAT",
                                                                            "numeric": "336"
                                                                        },
                                                                        "phone": [
                                                                            "+379"
                                                                        ],
                                                                        "emoji": "🇻🇦",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg"
                                                                    },
                                                                    "HN": {
                                                                        "name": "Honduras",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Tegucigalpa": "-06:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "HN",
                                                                            "alpha-3": "HND",
                                                                            "numeric": "340"
                                                                        },
                                                                        "phone": [
                                                                            "+504"
                                                                        ],
                                                                        "emoji": "🇭🇳",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg"
                                                                    },
                                                                    "HK": {
                                                                        "name": "Hong Kong",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Hong_Kong": "+08:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "HK",
                                                                            "alpha-3": "HKG",
                                                                            "numeric": "344"
                                                                        },
                                                                        "phone": [
                                                                            "+852"
                                                                        ],
                                                                        "emoji": "🇭🇰",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg"
                                                                    },
                                                                    "HU": {
                                                                        "name": "Hungary",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Budapest": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "HU",
                                                                            "alpha-3": "HUN",
                                                                            "numeric": "348"
                                                                        },
                                                                        "phone": [
                                                                            "+36"
                                                                        ],
                                                                        "emoji": "🇭🇺",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg"
                                                                    },
                                                                    "IS": {
                                                                        "name": "Iceland",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Atlantic/Reykjavik": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "IS",
                                                                            "alpha-3": "ISL",
                                                                            "numeric": "352"
                                                                        },
                                                                        "phone": [
                                                                            "+354"
                                                                        ],
                                                                        "emoji": "🇮🇸",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg"
                                                                    },
                                                                    "IN": {
                                                                        "name": "India",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Kolkata": "+05:30"
                                                                        },
                                                                        "iso": {
                                                                            "code": "IN",
                                                                            "alpha-3": "IND",
                                                                            "numeric": "356"
                                                                        },
                                                                        "phone": [
                                                                            "+91"
                                                                        ],
                                                                        "emoji": "🇮🇳",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg"
                                                                    },
                                                                    "ID": {
                                                                        "name": "Indonesia",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Jakarta": "+07:00",
                                                                            "Asia/Jayapura": "+09:00",
                                                                            "Asia/Makassar": "+08:00",
                                                                            "Asia/Pontianak": "+07:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "ID",
                                                                            "alpha-3": "IDN",
                                                                            "numeric": "360"
                                                                        },
                                                                        "phone": [
                                                                            "+62"
                                                                        ],
                                                                        "emoji": "🇮🇩",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg"
                                                                    },
                                                                    "IR": {
                                                                        "name": "Iran, Islamic Republic of",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Tehran": "+03:30"
                                                                        },
                                                                        "iso": {
                                                                            "code": "IR",
                                                                            "alpha-3": "IRN",
                                                                            "numeric": "364"
                                                                        },
                                                                        "phone": [
                                                                            "+98"
                                                                        ],
                                                                        "emoji": "🇮🇷",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg"
                                                                    },
                                                                    "IQ": {
                                                                        "name": "Iraq",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Baghdad": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "IQ",
                                                                            "alpha-3": "IRQ",
                                                                            "numeric": "368"
                                                                        },
                                                                        "phone": [
                                                                            "+964"
                                                                        ],
                                                                        "emoji": "🇮🇶",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg"
                                                                    },
                                                                    "IE": {
                                                                        "name": "Ireland",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Dublin": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "IE",
                                                                            "alpha-3": "IRL",
                                                                            "numeric": "372"
                                                                        },
                                                                        "phone": [
                                                                            "+353"
                                                                        ],
                                                                        "emoji": "🇮🇪",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg"
                                                                    },
                                                                    "IM": {
                                                                        "name": "Isle of Man",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Isle_of_Man": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "IM",
                                                                            "alpha-3": "IMN",
                                                                            "numeric": "833"
                                                                        },
                                                                        "phone": [
                                                                            "+44-1624"
                                                                        ],
                                                                        "emoji": "🇮🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg"
                                                                    },
                                                                    "IL": {
                                                                        "name": "Israel",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Jerusalem": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "IL",
                                                                            "alpha-3": "ISR",
                                                                            "numeric": "376"
                                                                        },
                                                                        "phone": [
                                                                            "+972"
                                                                        ],
                                                                        "emoji": "🇮🇱",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg"
                                                                    },
                                                                    "IT": {
                                                                        "name": "Italy",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Rome": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "IT",
                                                                            "alpha-3": "ITA",
                                                                            "numeric": "380"
                                                                        },
                                                                        "phone": [
                                                                            "+39"
                                                                        ],
                                                                        "emoji": "🇮🇹",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg"
                                                                    },
                                                                    "JM": {
                                                                        "name": "Jamaica",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Jamaica": "-05:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "JM",
                                                                            "alpha-3": "JAM",
                                                                            "numeric": "388"
                                                                        },
                                                                        "phone": [
                                                                            "+1-876"
                                                                        ],
                                                                        "emoji": "🇯🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg"
                                                                    },
                                                                    "JP": {
                                                                        "name": "Japan",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Tokyo": "+09:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "JP",
                                                                            "alpha-3": "JPN",
                                                                            "numeric": "392"
                                                                        },
                                                                        "phone": [
                                                                            "+81"
                                                                        ],
                                                                        "emoji": "🇯🇵",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg"
                                                                    },
                                                                    "JE": {
                                                                        "name": "Jersey",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Jersey": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "JE",
                                                                            "alpha-3": "JEY",
                                                                            "numeric": "832"
                                                                        },
                                                                        "phone": [
                                                                            "+44-1534"
                                                                        ],
                                                                        "emoji": "🇯🇪",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg"
                                                                    },
                                                                    "JO": {
                                                                        "name": "Jordan",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Amman": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "JO",
                                                                            "alpha-3": "JOR",
                                                                            "numeric": "400"
                                                                        },
                                                                        "phone": [
                                                                            "+962"
                                                                        ],
                                                                        "emoji": "🇯🇴",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg"
                                                                    },
                                                                    "KZ": {
                                                                        "name": "Kazakhstan",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Almaty": "+06:00",
                                                                            "Asia/Aqtau": "+05:00",
                                                                            "Asia/Aqtobe": "+05:00",
                                                                            "Asia/Atyrau": "+05:00",
                                                                            "Asia/Oral": "+05:00",
                                                                            "Asia/Qostanay": "+06:00",
                                                                            "Asia/Qyzylorda": "+05:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "KZ",
                                                                            "alpha-3": "KAZ",
                                                                            "numeric": "398"
                                                                        },
                                                                        "phone": [
                                                                            "+7"
                                                                        ],
                                                                        "emoji": "🇰🇿",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg"
                                                                    },
                                                                    "KE": {
                                                                        "name": "Kenya",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Nairobi": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "KE",
                                                                            "alpha-3": "KEN",
                                                                            "numeric": "404"
                                                                        },
                                                                        "phone": [
                                                                            "+254"
                                                                        ],
                                                                        "emoji": "🇰🇪",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg"
                                                                    },
                                                                    "KI": {
                                                                        "name": "Kiribati",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Kanton": "+13:00",
                                                                            "Pacific/Kiritimati": "+14:00",
                                                                            "Pacific/Tarawa": "+12:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "KI",
                                                                            "alpha-3": "KIR",
                                                                            "numeric": "296"
                                                                        },
                                                                        "phone": [
                                                                            "+686"
                                                                        ],
                                                                        "emoji": "🇰🇮",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg"
                                                                    },
                                                                    "KP": {
                                                                        "name": "Korea, Democratic People's Republic of",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Pyongyang": "+09:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "KP",
                                                                            "alpha-3": "PRK",
                                                                            "numeric": "408"
                                                                        },
                                                                        "phone": [
                                                                            "+850"
                                                                        ],
                                                                        "emoji": "🇰🇵",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg"
                                                                    },
                                                                    "KR": {
                                                                        "name": "Korea, Republic of",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Seoul": "+09:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "KR",
                                                                            "alpha-3": "KOR",
                                                                            "numeric": "410"
                                                                        },
                                                                        "phone": [
                                                                            "+82"
                                                                        ],
                                                                        "emoji": "🇰🇷",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg"
                                                                    },
                                                                    "KW": {
                                                                        "name": "Kuwait",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Kuwait": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "KW",
                                                                            "alpha-3": "KWT",
                                                                            "numeric": "414"
                                                                        },
                                                                        "phone": [
                                                                            "+965"
                                                                        ],
                                                                        "emoji": "🇰🇼",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg"
                                                                    },
                                                                    "KG": {
                                                                        "name": "Kyrgyzstan",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Bishkek": "+06:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "KG",
                                                                            "alpha-3": "KGZ",
                                                                            "numeric": "417"
                                                                        },
                                                                        "phone": [
                                                                            "+996"
                                                                        ],
                                                                        "emoji": "🇰🇬",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg"
                                                                    },
                                                                    "LA": {
                                                                        "name": "Lao People's Democratic Republic",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Vientiane": "+07:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "LA",
                                                                            "alpha-3": "LAO",
                                                                            "numeric": "418"
                                                                        },
                                                                        "phone": [
                                                                            "+856"
                                                                        ],
                                                                        "emoji": "🇱🇦",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg"
                                                                    },
                                                                    "LV": {
                                                                        "name": "Latvia",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Riga": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "LV",
                                                                            "alpha-3": "LVA",
                                                                            "numeric": "428"
                                                                        },
                                                                        "phone": [
                                                                            "+371"
                                                                        ],
                                                                        "emoji": "🇱🇻",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg"
                                                                    },
                                                                    "LB": {
                                                                        "name": "Lebanon",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Beirut": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "LB",
                                                                            "alpha-3": "LBN",
                                                                            "numeric": "422"
                                                                        },
                                                                        "phone": [
                                                                            "+961"
                                                                        ],
                                                                        "emoji": "🇱🇧",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg"
                                                                    },
                                                                    "LS": {
                                                                        "name": "Lesotho",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Maseru": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "LS",
                                                                            "alpha-3": "LSO",
                                                                            "numeric": "426"
                                                                        },
                                                                        "phone": [
                                                                            "+266"
                                                                        ],
                                                                        "emoji": "🇱🇸",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg"
                                                                    },
                                                                    "LR": {
                                                                        "name": "Liberia",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Monrovia": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "LR",
                                                                            "alpha-3": "LBR",
                                                                            "numeric": "430"
                                                                        },
                                                                        "phone": [
                                                                            "+231"
                                                                        ],
                                                                        "emoji": "🇱🇷",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg"
                                                                    },
                                                                    "LY": {
                                                                        "name": "Libya",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Tripoli": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "LY",
                                                                            "alpha-3": "LBY",
                                                                            "numeric": "434"
                                                                        },
                                                                        "phone": [
                                                                            "+218"
                                                                        ],
                                                                        "emoji": "🇱🇾",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg"
                                                                    },
                                                                    "LI": {
                                                                        "name": "Liechtenstein",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Vaduz": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "LI",
                                                                            "alpha-3": "LIE",
                                                                            "numeric": "438"
                                                                        },
                                                                        "phone": [
                                                                            "+423"
                                                                        ],
                                                                        "emoji": "🇱🇮",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg"
                                                                    },
                                                                    "LT": {
                                                                        "name": "Lithuania",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Vilnius": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "LT",
                                                                            "alpha-3": "LTU",
                                                                            "numeric": "440"
                                                                        },
                                                                        "phone": [
                                                                            "+370"
                                                                        ],
                                                                        "emoji": "🇱🇹",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg"
                                                                    },
                                                                    "LU": {
                                                                        "name": "Luxembourg",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Luxembourg": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "LU",
                                                                            "alpha-3": "LUX",
                                                                            "numeric": "442"
                                                                        },
                                                                        "phone": [
                                                                            "+352"
                                                                        ],
                                                                        "emoji": "🇱🇺",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg"
                                                                    },
                                                                    "MO": {
                                                                        "name": "Macao",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Macau": "+08:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MO",
                                                                            "alpha-3": "MAC",
                                                                            "numeric": "446"
                                                                        },
                                                                        "phone": [
                                                                            "+853"
                                                                        ],
                                                                        "emoji": "🇲🇴",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg"
                                                                    },
                                                                    "MK": {
                                                                        "name": "Macedonia, the Former Yugoslav Republic of",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Skopje": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MK",
                                                                            "alpha-3": "MKD",
                                                                            "numeric": "807"
                                                                        },
                                                                        "phone": [
                                                                            "+389"
                                                                        ],
                                                                        "emoji": "🇲🇰",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg"
                                                                    },
                                                                    "MG": {
                                                                        "name": "Madagascar",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Indian/Antananarivo": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MG",
                                                                            "alpha-3": "MDG",
                                                                            "numeric": "450"
                                                                        },
                                                                        "phone": [
                                                                            "+261"
                                                                        ],
                                                                        "emoji": "🇲🇬",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg"
                                                                    },
                                                                    "MW": {
                                                                        "name": "Malawi",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Blantyre": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MW",
                                                                            "alpha-3": "MWI",
                                                                            "numeric": "454"
                                                                        },
                                                                        "phone": [
                                                                            "+265"
                                                                        ],
                                                                        "emoji": "🇲🇼",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg"
                                                                    },
                                                                    "MY": {
                                                                        "name": "Malaysia",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Kuala_Lumpur": "+08:00",
                                                                            "Asia/Kuching": "+08:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MY",
                                                                            "alpha-3": "MYS",
                                                                            "numeric": "458"
                                                                        },
                                                                        "phone": [
                                                                            "+60"
                                                                        ],
                                                                        "emoji": "🇲🇾",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg"
                                                                    },
                                                                    "MV": {
                                                                        "name": "Maldives",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Indian/Maldives": "+05:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MV",
                                                                            "alpha-3": "MDV",
                                                                            "numeric": "462"
                                                                        },
                                                                        "phone": [
                                                                            "+960"
                                                                        ],
                                                                        "emoji": "🇲🇻",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg"
                                                                    },
                                                                    "ML": {
                                                                        "name": "Mali",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Bamako": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "ML",
                                                                            "alpha-3": "MLI",
                                                                            "numeric": "466"
                                                                        },
                                                                        "phone": [
                                                                            "+223"
                                                                        ],
                                                                        "emoji": "🇲🇱",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg"
                                                                    },
                                                                    "MT": {
                                                                        "name": "Malta",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Malta": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MT",
                                                                            "alpha-3": "MLT",
                                                                            "numeric": "470"
                                                                        },
                                                                        "phone": [
                                                                            "+356"
                                                                        ],
                                                                        "emoji": "🇲🇹",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg"
                                                                    },
                                                                    "MH": {
                                                                        "name": "Marshall Islands",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Kwajalein": "+12:00",
                                                                            "Pacific/Majuro": "+12:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MH",
                                                                            "alpha-3": "MHL",
                                                                            "numeric": "584"
                                                                        },
                                                                        "phone": [
                                                                            "+692"
                                                                        ],
                                                                        "emoji": "🇲🇭",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg"
                                                                    },
                                                                    "MQ": {
                                                                        "name": "Martinique",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Martinique": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MQ",
                                                                            "alpha-3": "MTQ",
                                                                            "numeric": "474"
                                                                        },
                                                                        "phone": [
                                                                            "+596"
                                                                        ],
                                                                        "emoji": "🇲🇶",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg"
                                                                    },
                                                                    "MR": {
                                                                        "name": "Mauritania",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Nouakchott": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MR",
                                                                            "alpha-3": "MRT",
                                                                            "numeric": "478"
                                                                        },
                                                                        "phone": [
                                                                            "+222"
                                                                        ],
                                                                        "emoji": "🇲🇷",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg"
                                                                    },
                                                                    "MU": {
                                                                        "name": "Mauritius",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Indian/Mauritius": "+04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MU",
                                                                            "alpha-3": "MUS",
                                                                            "numeric": "480"
                                                                        },
                                                                        "phone": [
                                                                            "+230"
                                                                        ],
                                                                        "emoji": "🇲🇺",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg"
                                                                    },
                                                                    "YT": {
                                                                        "name": "Mayotte",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Indian/Mayotte": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "YT",
                                                                            "alpha-3": "MYT",
                                                                            "numeric": "175"
                                                                        },
                                                                        "phone": [
                                                                            "+262"
                                                                        ],
                                                                        "emoji": "🇾🇹",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg"
                                                                    },
                                                                    "MX": {
                                                                        "name": "Mexico",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Bahia_Banderas": "-06:00",
                                                                            "America/Cancun": "-05:00",
                                                                            "America/Chihuahua": "-06:00",
                                                                            "America/Ciudad_Juarez": "-06:00",
                                                                            "America/Hermosillo": "-07:00",
                                                                            "America/Matamoros": "-05:00",
                                                                            "America/Mazatlan": "-07:00",
                                                                            "America/Merida": "-06:00",
                                                                            "America/Mexico_City": "-06:00",
                                                                            "America/Monterrey": "-06:00",
                                                                            "America/Ojinaga": "-05:00",
                                                                            "America/Tijuana": "-07:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MX",
                                                                            "alpha-3": "MEX",
                                                                            "numeric": "484"
                                                                        },
                                                                        "phone": [
                                                                            "+52"
                                                                        ],
                                                                        "emoji": "🇲🇽",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg"
                                                                    },
                                                                    "FM": {
                                                                        "name": "Micronesia, Federated States of",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Chuuk": "+10:00",
                                                                            "Pacific/Kosrae": "+11:00",
                                                                            "Pacific/Pohnpei": "+11:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "FM",
                                                                            "alpha-3": "FSM",
                                                                            "numeric": "583"
                                                                        },
                                                                        "phone": [
                                                                            "+691"
                                                                        ],
                                                                        "emoji": "🇫🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg"
                                                                    },
                                                                    "MD": {
                                                                        "name": "Moldova, Republic of",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Chisinau": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MD",
                                                                            "alpha-3": "MDA",
                                                                            "numeric": "498"
                                                                        },
                                                                        "phone": [
                                                                            "+373"
                                                                        ],
                                                                        "emoji": "🇲🇩",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg"
                                                                    },
                                                                    "MC": {
                                                                        "name": "Monaco",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Monaco": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MC",
                                                                            "alpha-3": "MCO",
                                                                            "numeric": "492"
                                                                        },
                                                                        "phone": [
                                                                            "+377"
                                                                        ],
                                                                        "emoji": "🇲🇨",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg"
                                                                    },
                                                                    "MN": {
                                                                        "name": "Mongolia",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Choibalsan": "+08:00",
                                                                            "Asia/Hovd": "+07:00",
                                                                            "Asia/Ulaanbaatar": "+08:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MN",
                                                                            "alpha-3": "MNG",
                                                                            "numeric": "496"
                                                                        },
                                                                        "phone": [
                                                                            "+976"
                                                                        ],
                                                                        "emoji": "🇲🇳",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg"
                                                                    },
                                                                    "ME": {
                                                                        "name": "Montenegro",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Podgorica": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "ME",
                                                                            "alpha-3": "MNE",
                                                                            "numeric": "499"
                                                                        },
                                                                        "phone": [
                                                                            "+382"
                                                                        ],
                                                                        "emoji": "🇲🇪",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg"
                                                                    },
                                                                    "MS": {
                                                                        "name": "Montserrat",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Montserrat": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MS",
                                                                            "alpha-3": "MSR",
                                                                            "numeric": "500"
                                                                        },
                                                                        "phone": [
                                                                            "+1-664"
                                                                        ],
                                                                        "emoji": "🇲🇸",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg"
                                                                    },
                                                                    "MA": {
                                                                        "name": "Morocco",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Casablanca": "+00:00",
                                                                            "Africa/El_Aaiun": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MA",
                                                                            "alpha-3": "MAR",
                                                                            "numeric": "504"
                                                                        },
                                                                        "phone": [
                                                                            "+212"
                                                                        ],
                                                                        "emoji": "🇲🇦",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg"
                                                                    },
                                                                    "MZ": {
                                                                        "name": "Mozambique",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Maputo": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MZ",
                                                                            "alpha-3": "MOZ",
                                                                            "numeric": "508"
                                                                        },
                                                                        "phone": [
                                                                            "+258"
                                                                        ],
                                                                        "emoji": "🇲🇿",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg"
                                                                    },
                                                                    "MM": {
                                                                        "name": "Myanmar",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Yangon": "+06:30"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MM",
                                                                            "alpha-3": "MMR",
                                                                            "numeric": "104"
                                                                        },
                                                                        "phone": [
                                                                            "+95"
                                                                        ],
                                                                        "emoji": "🇲🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg"
                                                                    },
                                                                    "NA": {
                                                                        "name": "Namibia",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Windhoek": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "NA",
                                                                            "alpha-3": "NAM",
                                                                            "numeric": "516"
                                                                        },
                                                                        "phone": [
                                                                            "+264"
                                                                        ],
                                                                        "emoji": "🇳🇦",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg"
                                                                    },
                                                                    "NR": {
                                                                        "name": "Nauru",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Nauru": "+12:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "NR",
                                                                            "alpha-3": "NRU",
                                                                            "numeric": "520"
                                                                        },
                                                                        "phone": [
                                                                            "+674"
                                                                        ],
                                                                        "emoji": "🇳🇷",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg"
                                                                    },
                                                                    "NP": {
                                                                        "name": "Nepal",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Kathmandu": "+05:45"
                                                                        },
                                                                        "iso": {
                                                                            "code": "NP",
                                                                            "alpha-3": "NPL",
                                                                            "numeric": "524"
                                                                        },
                                                                        "phone": [
                                                                            "+977"
                                                                        ],
                                                                        "emoji": "🇳🇵",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg"
                                                                    },
                                                                    "NL": {
                                                                        "name": "Netherlands",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Amsterdam": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "NL",
                                                                            "alpha-3": "NLD",
                                                                            "numeric": "528"
                                                                        },
                                                                        "phone": [
                                                                            "+31"
                                                                        ],
                                                                        "emoji": "🇳🇱",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg"
                                                                    },
                                                                    "NC": {
                                                                        "name": "New Caledonia",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Noumea": "+11:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "NC",
                                                                            "alpha-3": "NCL",
                                                                            "numeric": "540"
                                                                        },
                                                                        "phone": [
                                                                            "+687"
                                                                        ],
                                                                        "emoji": "🇳🇨",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg"
                                                                    },
                                                                    "NZ": {
                                                                        "name": "New Zealand",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Auckland": "+12:00",
                                                                            "Pacific/Chatham": "+12:45"
                                                                        },
                                                                        "iso": {
                                                                            "code": "NZ",
                                                                            "alpha-3": "NZL",
                                                                            "numeric": "554"
                                                                        },
                                                                        "phone": [
                                                                            "+64"
                                                                        ],
                                                                        "emoji": "🇳🇿",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg"
                                                                    },
                                                                    "NI": {
                                                                        "name": "Nicaragua",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Managua": "-06:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "NI",
                                                                            "alpha-3": "NIC",
                                                                            "numeric": "558"
                                                                        },
                                                                        "phone": [
                                                                            "+505"
                                                                        ],
                                                                        "emoji": "🇳🇮",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg"
                                                                    },
                                                                    "NE": {
                                                                        "name": "Niger",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Niamey": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "NE",
                                                                            "alpha-3": "NER",
                                                                            "numeric": "562"
                                                                        },
                                                                        "phone": [
                                                                            "+227"
                                                                        ],
                                                                        "emoji": "🇳🇪",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg"
                                                                    },
                                                                    "NG": {
                                                                        "name": "Nigeria",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Lagos": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "NG",
                                                                            "alpha-3": "NGA",
                                                                            "numeric": "566"
                                                                        },
                                                                        "phone": [
                                                                            "+234"
                                                                        ],
                                                                        "emoji": "🇳🇬",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg"
                                                                    },
                                                                    "NU": {
                                                                        "name": "Niue",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Niue": "-11:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "NU",
                                                                            "alpha-3": "NIU",
                                                                            "numeric": "570"
                                                                        },
                                                                        "phone": [
                                                                            "+683"
                                                                        ],
                                                                        "emoji": "🇳🇺",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg"
                                                                    },
                                                                    "NF": {
                                                                        "name": "Norfolk Island",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Norfolk": "+11:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "NF",
                                                                            "alpha-3": "NFK",
                                                                            "numeric": "574"
                                                                        },
                                                                        "phone": [
                                                                            "+672"
                                                                        ],
                                                                        "emoji": "🇳🇫",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg"
                                                                    },
                                                                    "MP": {
                                                                        "name": "Northern Mariana Islands",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Saipan": "+10:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MP",
                                                                            "alpha-3": "MNP",
                                                                            "numeric": "580"
                                                                        },
                                                                        "phone": [
                                                                            "+1-670"
                                                                        ],
                                                                        "emoji": "🇲🇵",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg"
                                                                    },
                                                                    "NO": {
                                                                        "name": "Norway",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Oslo": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "NO",
                                                                            "alpha-3": "NOR",
                                                                            "numeric": "578"
                                                                        },
                                                                        "phone": [
                                                                            "+47"
                                                                        ],
                                                                        "emoji": "🇳🇴",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg"
                                                                    },
                                                                    "OM": {
                                                                        "name": "Oman",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Muscat": "+04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "OM",
                                                                            "alpha-3": "OMN",
                                                                            "numeric": "512"
                                                                        },
                                                                        "phone": [
                                                                            "+968"
                                                                        ],
                                                                        "emoji": "🇴🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg"
                                                                    },
                                                                    "PK": {
                                                                        "name": "Pakistan",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Karachi": "+05:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "PK",
                                                                            "alpha-3": "PAK",
                                                                            "numeric": "586"
                                                                        },
                                                                        "phone": [
                                                                            "+92"
                                                                        ],
                                                                        "emoji": "🇵🇰",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg"
                                                                    },
                                                                    "PW": {
                                                                        "name": "Palau",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Palau": "+09:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "PW",
                                                                            "alpha-3": "PLW",
                                                                            "numeric": "585"
                                                                        },
                                                                        "phone": [
                                                                            "+680"
                                                                        ],
                                                                        "emoji": "🇵🇼",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg"
                                                                    },
                                                                    "PS": {
                                                                        "name": "Palestine, State of",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Gaza": "+02:00",
                                                                            "Asia/Hebron": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "PS",
                                                                            "alpha-3": "PSE",
                                                                            "numeric": "275"
                                                                        },
                                                                        "phone": [
                                                                            "+970"
                                                                        ],
                                                                        "emoji": "🇵🇸",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg"
                                                                    },
                                                                    "PA": {
                                                                        "name": "Panama",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Panama": "-05:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "PA",
                                                                            "alpha-3": "PAN",
                                                                            "numeric": "591"
                                                                        },
                                                                        "phone": [
                                                                            "+507"
                                                                        ],
                                                                        "emoji": "🇵🇦",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg"
                                                                    },
                                                                    "PG": {
                                                                        "name": "Papua New Guinea",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Bougainville": "+11:00",
                                                                            "Pacific/Port_Moresby": "+10:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "PG",
                                                                            "alpha-3": "PNG",
                                                                            "numeric": "598"
                                                                        },
                                                                        "phone": [
                                                                            "+675"
                                                                        ],
                                                                        "emoji": "🇵🇬",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg"
                                                                    },
                                                                    "PY": {
                                                                        "name": "Paraguay",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Asuncion": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "PY",
                                                                            "alpha-3": "PRY",
                                                                            "numeric": "600"
                                                                        },
                                                                        "phone": [
                                                                            "+595"
                                                                        ],
                                                                        "emoji": "🇵🇾",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg"
                                                                    },
                                                                    "PE": {
                                                                        "name": "Peru",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Lima": "-05:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "PE",
                                                                            "alpha-3": "PER",
                                                                            "numeric": "604"
                                                                        },
                                                                        "phone": [
                                                                            "+51"
                                                                        ],
                                                                        "emoji": "🇵🇪",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg"
                                                                    },
                                                                    "PH": {
                                                                        "name": "Philippines",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Manila": "+08:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "PH",
                                                                            "alpha-3": "PHL",
                                                                            "numeric": "608"
                                                                        },
                                                                        "phone": [
                                                                            "+63"
                                                                        ],
                                                                        "emoji": "🇵🇭",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg"
                                                                    },
                                                                    "PN": {
                                                                        "name": "Pitcairn",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Pitcairn": "-08:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "PN",
                                                                            "alpha-3": "PCN",
                                                                            "numeric": "612"
                                                                        },
                                                                        "phone": [
                                                                            "+870"
                                                                        ],
                                                                        "emoji": "🇵🇳",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg"
                                                                    },
                                                                    "PL": {
                                                                        "name": "Poland",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Warsaw": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "PL",
                                                                            "alpha-3": "POL",
                                                                            "numeric": "616"
                                                                        },
                                                                        "phone": [
                                                                            "+48"
                                                                        ],
                                                                        "emoji": "🇵🇱",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg"
                                                                    },
                                                                    "PT": {
                                                                        "name": "Portugal",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Atlantic/Azores": "+00:00",
                                                                            "Atlantic/Madeira": "+01:00",
                                                                            "Europe/Lisbon": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "PT",
                                                                            "alpha-3": "PRT",
                                                                            "numeric": "620"
                                                                        },
                                                                        "phone": [
                                                                            "+351"
                                                                        ],
                                                                        "emoji": "🇵🇹",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg"
                                                                    },
                                                                    "PR": {
                                                                        "name": "Puerto Rico",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Puerto_Rico": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "PR",
                                                                            "alpha-3": "PRI",
                                                                            "numeric": "630"
                                                                        },
                                                                        "phone": [
                                                                            "+1-787",
                                                                            "+1-939"
                                                                        ],
                                                                        "emoji": "🇵🇷",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg"
                                                                    },
                                                                    "QA": {
                                                                        "name": "Qatar",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Qatar": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "QA",
                                                                            "alpha-3": "QAT",
                                                                            "numeric": "634"
                                                                        },
                                                                        "phone": [
                                                                            "+974"
                                                                        ],
                                                                        "emoji": "🇶🇦",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg"
                                                                    },
                                                                    "RO": {
                                                                        "name": "Romania",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Bucharest": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "RO",
                                                                            "alpha-3": "ROU",
                                                                            "numeric": "642"
                                                                        },
                                                                        "phone": [
                                                                            "+40"
                                                                        ],
                                                                        "emoji": "🇷🇴",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg"
                                                                    },
                                                                    "RU": {
                                                                        "name": "Russian Federation",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Asia/Anadyr": "+12:00",
                                                                            "Asia/Barnaul": "+07:00",
                                                                            "Asia/Chita": "+09:00",
                                                                            "Asia/Irkutsk": "+08:00",
                                                                            "Asia/Kamchatka": "+12:00",
                                                                            "Asia/Khandyga": "+09:00",
                                                                            "Asia/Krasnoyarsk": "+07:00",
                                                                            "Asia/Magadan": "+11:00",
                                                                            "Asia/Novokuznetsk": "+07:00",
                                                                            "Asia/Novosibirsk": "+07:00",
                                                                            "Asia/Omsk": "+06:00",
                                                                            "Asia/Sakhalin": "+11:00",
                                                                            "Asia/Srednekolymsk": "+11:00",
                                                                            "Asia/Tomsk": "+07:00",
                                                                            "Asia/Ust-Nera": "+10:00",
                                                                            "Asia/Vladivostok": "+10:00",
                                                                            "Asia/Yakutsk": "+09:00",
                                                                            "Asia/Yekaterinburg": "+05:00",
                                                                            "Europe/Astrakhan": "+04:00",
                                                                            "Europe/Kaliningrad": "+02:00",
                                                                            "Europe/Kirov": "+03:00",
                                                                            "Europe/Moscow": "+03:00",
                                                                            "Europe/Samara": "+04:00",
                                                                            "Europe/Saratov": "+04:00",
                                                                            "Europe/Ulyanovsk": "+04:00",
                                                                            "Europe/Volgograd": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "RU",
                                                                            "alpha-3": "RUS",
                                                                            "numeric": "643"
                                                                        },
                                                                        "phone": [
                                                                            "+7"
                                                                        ],
                                                                        "emoji": "🇷🇺",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg"
                                                                    },
                                                                    "RW": {
                                                                        "name": "Rwanda",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Kigali": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "RW",
                                                                            "alpha-3": "RWA",
                                                                            "numeric": "646"
                                                                        },
                                                                        "phone": [
                                                                            "+250"
                                                                        ],
                                                                        "emoji": "🇷🇼",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg"
                                                                    },
                                                                    "RE": {
                                                                        "name": "Réunion",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Indian/Reunion": "+04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "RE",
                                                                            "alpha-3": "REU",
                                                                            "numeric": "638"
                                                                        },
                                                                        "phone": [
                                                                            "+262"
                                                                        ],
                                                                        "emoji": "🇷🇪",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg"
                                                                    },
                                                                    "BL": {
                                                                        "name": "Saint Barthélemy",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/St_Barthelemy": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "BL",
                                                                            "alpha-3": "BLM",
                                                                            "numeric": "652"
                                                                        },
                                                                        "phone": [
                                                                            "+590"
                                                                        ],
                                                                        "emoji": "🇧🇱",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg"
                                                                    },
                                                                    "SH": {
                                                                        "name": "Saint Helena, Ascension and Tristan da Cunha",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Atlantic/St_Helena": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SH",
                                                                            "alpha-3": "SHN",
                                                                            "numeric": "654"
                                                                        },
                                                                        "phone": [
                                                                            "+290"
                                                                        ],
                                                                        "emoji": "🇸🇭",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg"
                                                                    },
                                                                    "KN": {
                                                                        "name": "Saint Kitts and Nevis",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/St_Kitts": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "KN",
                                                                            "alpha-3": "KNA",
                                                                            "numeric": "659"
                                                                        },
                                                                        "phone": [
                                                                            "+1-869"
                                                                        ],
                                                                        "emoji": "🇰🇳",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg"
                                                                    },
                                                                    "LC": {
                                                                        "name": "Saint Lucia",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/St_Lucia": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "LC",
                                                                            "alpha-3": "LCA",
                                                                            "numeric": "662"
                                                                        },
                                                                        "phone": [
                                                                            "+1-758"
                                                                        ],
                                                                        "emoji": "🇱🇨",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg"
                                                                    },
                                                                    "MF": {
                                                                        "name": "Saint Martin (French part)",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Marigot": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "MF",
                                                                            "alpha-3": "MAF",
                                                                            "numeric": "663"
                                                                        },
                                                                        "phone": [
                                                                            "+590"
                                                                        ],
                                                                        "emoji": "🇲🇫",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg"
                                                                    },
                                                                    "PM": {
                                                                        "name": "Saint Pierre and Miquelon",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Miquelon": "-02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "PM",
                                                                            "alpha-3": "SPM",
                                                                            "numeric": "666"
                                                                        },
                                                                        "phone": [
                                                                            "+508"
                                                                        ],
                                                                        "emoji": "🇵🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg"
                                                                    },
                                                                    "VC": {
                                                                        "name": "Saint Vincent and the Grenadines",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/St_Vincent": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "VC",
                                                                            "alpha-3": "VCT",
                                                                            "numeric": "670"
                                                                        },
                                                                        "phone": [
                                                                            "+1-784"
                                                                        ],
                                                                        "emoji": "🇻🇨",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg"
                                                                    },
                                                                    "WS": {
                                                                        "name": "Samoa",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Apia": "+13:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "WS",
                                                                            "alpha-3": "WSM",
                                                                            "numeric": "882"
                                                                        },
                                                                        "phone": [
                                                                            "+685"
                                                                        ],
                                                                        "emoji": "🇼🇸",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg"
                                                                    },
                                                                    "SM": {
                                                                        "name": "San Marino",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/San_Marino": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SM",
                                                                            "alpha-3": "SMR",
                                                                            "numeric": "674"
                                                                        },
                                                                        "phone": [
                                                                            "+378"
                                                                        ],
                                                                        "emoji": "🇸🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg"
                                                                    },
                                                                    "ST": {
                                                                        "name": "Sao Tome and Principe",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Sao_Tome": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "ST",
                                                                            "alpha-3": "STP",
                                                                            "numeric": "678"
                                                                        },
                                                                        "phone": [
                                                                            "+239"
                                                                        ],
                                                                        "emoji": "🇸🇹",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg"
                                                                    },
                                                                    "SA": {
                                                                        "name": "Saudi Arabia",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Riyadh": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SA",
                                                                            "alpha-3": "SAU",
                                                                            "numeric": "682"
                                                                        },
                                                                        "phone": [
                                                                            "+966"
                                                                        ],
                                                                        "emoji": "🇸🇦",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg"
                                                                    },
                                                                    "SN": {
                                                                        "name": "Senegal",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Dakar": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SN",
                                                                            "alpha-3": "SEN",
                                                                            "numeric": "686"
                                                                        },
                                                                        "phone": [
                                                                            "+221"
                                                                        ],
                                                                        "emoji": "🇸🇳",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg"
                                                                    },
                                                                    "RS": {
                                                                        "name": "Serbia",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Belgrade": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "RS",
                                                                            "alpha-3": "SRB",
                                                                            "numeric": "688"
                                                                        },
                                                                        "phone": [
                                                                            "+381"
                                                                        ],
                                                                        "emoji": "🇷🇸",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg"
                                                                    },
                                                                    "SC": {
                                                                        "name": "Seychelles",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Indian/Mahe": "+04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SC",
                                                                            "alpha-3": "SYC",
                                                                            "numeric": "690"
                                                                        },
                                                                        "phone": [
                                                                            "+248"
                                                                        ],
                                                                        "emoji": "🇸🇨",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg"
                                                                    },
                                                                    "SL": {
                                                                        "name": "Sierra Leone",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Freetown": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SL",
                                                                            "alpha-3": "SLE",
                                                                            "numeric": "694"
                                                                        },
                                                                        "phone": [
                                                                            "+232"
                                                                        ],
                                                                        "emoji": "🇸🇱",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg"
                                                                    },
                                                                    "SG": {
                                                                        "name": "Singapore",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Singapore": "+08:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SG",
                                                                            "alpha-3": "SGP",
                                                                            "numeric": "702"
                                                                        },
                                                                        "phone": [
                                                                            "+65"
                                                                        ],
                                                                        "emoji": "🇸🇬",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg"
                                                                    },
                                                                    "SX": {
                                                                        "name": "Sint Maarten (Dutch part)",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Lower_Princes": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SX",
                                                                            "alpha-3": "SXM",
                                                                            "numeric": "534"
                                                                        },
                                                                        "phone": [
                                                                            "+599"
                                                                        ],
                                                                        "emoji": "🇸🇽",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SX.svg"
                                                                    },
                                                                    "SK": {
                                                                        "name": "Slovakia",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Bratislava": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SK",
                                                                            "alpha-3": "SVK",
                                                                            "numeric": "703"
                                                                        },
                                                                        "phone": [
                                                                            "+421"
                                                                        ],
                                                                        "emoji": "🇸🇰",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg"
                                                                    },
                                                                    "SI": {
                                                                        "name": "Slovenia",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Ljubljana": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SI",
                                                                            "alpha-3": "SVN",
                                                                            "numeric": "705"
                                                                        },
                                                                        "phone": [
                                                                            "+386"
                                                                        ],
                                                                        "emoji": "🇸🇮",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg"
                                                                    },
                                                                    "SB": {
                                                                        "name": "Solomon Islands",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Guadalcanal": "+11:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SB",
                                                                            "alpha-3": "SLB",
                                                                            "numeric": "090"
                                                                        },
                                                                        "phone": [
                                                                            "+677"
                                                                        ],
                                                                        "emoji": "🇸🇧",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg"
                                                                    },
                                                                    "SO": {
                                                                        "name": "Somalia",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Mogadishu": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SO",
                                                                            "alpha-3": "SOM",
                                                                            "numeric": "706"
                                                                        },
                                                                        "phone": [
                                                                            "+252"
                                                                        ],
                                                                        "emoji": "🇸🇴",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg"
                                                                    },
                                                                    "ZA": {
                                                                        "name": "South Africa",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Johannesburg": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "ZA",
                                                                            "alpha-3": "ZAF",
                                                                            "numeric": "710"
                                                                        },
                                                                        "phone": [
                                                                            "+27"
                                                                        ],
                                                                        "emoji": "🇿🇦",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg"
                                                                    },
                                                                    "GS": {
                                                                        "name": "South Georgia and the South Sandwich Islands",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "Atlantic/South_Georgia": "-02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GS",
                                                                            "alpha-3": "SGS",
                                                                            "numeric": "239"
                                                                        },
                                                                        "phone": [
                                                                            "+"
                                                                        ],
                                                                        "emoji": "🇬🇸",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GS.svg"
                                                                    },
                                                                    "SS": {
                                                                        "name": "South Sudan",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Juba": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SS",
                                                                            "alpha-3": "SSD",
                                                                            "numeric": "728"
                                                                        },
                                                                        "phone": [
                                                                            "+211"
                                                                        ],
                                                                        "emoji": "🇸🇸",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg"
                                                                    },
                                                                    "ES": {
                                                                        "name": "Spain",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Africa/Ceuta": "+02:00",
                                                                            "Atlantic/Canary": "+01:00",
                                                                            "Europe/Madrid": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "ES",
                                                                            "alpha-3": "ESP",
                                                                            "numeric": "724"
                                                                        },
                                                                        "phone": [
                                                                            "+34"
                                                                        ],
                                                                        "emoji": "🇪🇸",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg"
                                                                    },
                                                                    "LK": {
                                                                        "name": "Sri Lanka",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Colombo": "+05:30"
                                                                        },
                                                                        "iso": {
                                                                            "code": "LK",
                                                                            "alpha-3": "LKA",
                                                                            "numeric": "144"
                                                                        },
                                                                        "phone": [
                                                                            "+94"
                                                                        ],
                                                                        "emoji": "🇱🇰",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg"
                                                                    },
                                                                    "SD": {
                                                                        "name": "Sudan",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Khartoum": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SD",
                                                                            "alpha-3": "SDN",
                                                                            "numeric": "729"
                                                                        },
                                                                        "phone": [
                                                                            "+249"
                                                                        ],
                                                                        "emoji": "🇸🇩",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg"
                                                                    },
                                                                    "SR": {
                                                                        "name": "Suriname",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Paramaribo": "-03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SR",
                                                                            "alpha-3": "SUR",
                                                                            "numeric": "740"
                                                                        },
                                                                        "phone": [
                                                                            "+597"
                                                                        ],
                                                                        "emoji": "🇸🇷",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg"
                                                                    },
                                                                    "SJ": {
                                                                        "name": "Svalbard and Jan Mayen",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Arctic/Longyearbyen": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SJ",
                                                                            "alpha-3": "SJM",
                                                                            "numeric": "744"
                                                                        },
                                                                        "phone": [
                                                                            "+47"
                                                                        ],
                                                                        "emoji": "🇸🇯",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SJ.svg"
                                                                    },
                                                                    "SZ": {
                                                                        "name": "Swaziland",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Mbabane": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SZ",
                                                                            "alpha-3": "SWZ",
                                                                            "numeric": "748"
                                                                        },
                                                                        "phone": [
                                                                            "+268"
                                                                        ],
                                                                        "emoji": "🇸🇿",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg"
                                                                    },
                                                                    "SE": {
                                                                        "name": "Sweden",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Stockholm": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SE",
                                                                            "alpha-3": "SWE",
                                                                            "numeric": "752"
                                                                        },
                                                                        "phone": [
                                                                            "+46"
                                                                        ],
                                                                        "emoji": "🇸🇪",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg"
                                                                    },
                                                                    "CH": {
                                                                        "name": "Switzerland",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Zurich": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "CH",
                                                                            "alpha-3": "CHE",
                                                                            "numeric": "756"
                                                                        },
                                                                        "phone": [
                                                                            "+41"
                                                                        ],
                                                                        "emoji": "🇨🇭",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg"
                                                                    },
                                                                    "SY": {
                                                                        "name": "Syrian Arab Republic",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Damascus": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "SY",
                                                                            "alpha-3": "SYR",
                                                                            "numeric": "760"
                                                                        },
                                                                        "phone": [
                                                                            "+963"
                                                                        ],
                                                                        "emoji": "🇸🇾",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg"
                                                                    },
                                                                    "TW": {
                                                                        "name": "Taiwan, Province of China",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Taipei": "+08:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TW",
                                                                            "alpha-3": "TWN",
                                                                            "numeric": "158"
                                                                        },
                                                                        "phone": [
                                                                            "+886"
                                                                        ],
                                                                        "emoji": "🇹🇼",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg"
                                                                    },
                                                                    "TJ": {
                                                                        "name": "Tajikistan",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Dushanbe": "+05:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TJ",
                                                                            "alpha-3": "TJK",
                                                                            "numeric": "762"
                                                                        },
                                                                        "phone": [
                                                                            "+992"
                                                                        ],
                                                                        "emoji": "🇹🇯",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg"
                                                                    },
                                                                    "TZ": {
                                                                        "name": "Tanzania, United Republic of",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Dar_es_Salaam": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TZ",
                                                                            "alpha-3": "TZA",
                                                                            "numeric": "834"
                                                                        },
                                                                        "phone": [
                                                                            "+255"
                                                                        ],
                                                                        "emoji": "🇹🇿",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg"
                                                                    },
                                                                    "TH": {
                                                                        "name": "Thailand",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Bangkok": "+07:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TH",
                                                                            "alpha-3": "THA",
                                                                            "numeric": "764"
                                                                        },
                                                                        "phone": [
                                                                            "+66"
                                                                        ],
                                                                        "emoji": "🇹🇭",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg"
                                                                    },
                                                                    "TL": {
                                                                        "name": "Timor-Leste",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Dili": "+09:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TL",
                                                                            "alpha-3": "TLS",
                                                                            "numeric": "626"
                                                                        },
                                                                        "phone": [
                                                                            "+670"
                                                                        ],
                                                                        "emoji": "🇹🇱",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg"
                                                                    },
                                                                    "TG": {
                                                                        "name": "Togo",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Lome": "+00:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TG",
                                                                            "alpha-3": "TGO",
                                                                            "numeric": "768"
                                                                        },
                                                                        "phone": [
                                                                            "+228"
                                                                        ],
                                                                        "emoji": "🇹🇬",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg"
                                                                    },
                                                                    "TK": {
                                                                        "name": "Tokelau",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Fakaofo": "+13:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TK",
                                                                            "alpha-3": "TKL",
                                                                            "numeric": "772"
                                                                        },
                                                                        "phone": [
                                                                            "+690"
                                                                        ],
                                                                        "emoji": "🇹🇰",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg"
                                                                    },
                                                                    "TO": {
                                                                        "name": "Tonga",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Tongatapu": "+13:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TO",
                                                                            "alpha-3": "TON",
                                                                            "numeric": "776"
                                                                        },
                                                                        "phone": [
                                                                            "+676"
                                                                        ],
                                                                        "emoji": "🇹🇴",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg"
                                                                    },
                                                                    "TT": {
                                                                        "name": "Trinidad and Tobago",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Port_of_Spain": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TT",
                                                                            "alpha-3": "TTO",
                                                                            "numeric": "780"
                                                                        },
                                                                        "phone": [
                                                                            "+1-868"
                                                                        ],
                                                                        "emoji": "🇹🇹",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg"
                                                                    },
                                                                    "TN": {
                                                                        "name": "Tunisia",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Tunis": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TN",
                                                                            "alpha-3": "TUN",
                                                                            "numeric": "788"
                                                                        },
                                                                        "phone": [
                                                                            "+216"
                                                                        ],
                                                                        "emoji": "🇹🇳",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg"
                                                                    },
                                                                    "TR": {
                                                                        "name": "Turkey",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Europe/Istanbul": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TR",
                                                                            "alpha-3": "TUR",
                                                                            "numeric": "792"
                                                                        },
                                                                        "phone": [
                                                                            "+90"
                                                                        ],
                                                                        "emoji": "🇹🇷",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg"
                                                                    },
                                                                    "TM": {
                                                                        "name": "Turkmenistan",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Ashgabat": "+05:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TM",
                                                                            "alpha-3": "TKM",
                                                                            "numeric": "795"
                                                                        },
                                                                        "phone": [
                                                                            "+993"
                                                                        ],
                                                                        "emoji": "🇹🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg"
                                                                    },
                                                                    "TC": {
                                                                        "name": "Turks and Caicos Islands",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Grand_Turk": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TC",
                                                                            "alpha-3": "TCA",
                                                                            "numeric": "796"
                                                                        },
                                                                        "phone": [
                                                                            "+1-649"
                                                                        ],
                                                                        "emoji": "🇹🇨",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg"
                                                                    },
                                                                    "TV": {
                                                                        "name": "Tuvalu",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Funafuti": "+12:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "TV",
                                                                            "alpha-3": "TUV",
                                                                            "numeric": "798"
                                                                        },
                                                                        "phone": [
                                                                            "+688"
                                                                        ],
                                                                        "emoji": "🇹🇻",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg"
                                                                    },
                                                                    "UG": {
                                                                        "name": "Uganda",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Kampala": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "UG",
                                                                            "alpha-3": "UGA",
                                                                            "numeric": "800"
                                                                        },
                                                                        "phone": [
                                                                            "+256"
                                                                        ],
                                                                        "emoji": "🇺🇬",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg"
                                                                    },
                                                                    "UA": {
                                                                        "name": "Ukraine",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Kyiv": "+03:00",
                                                                            "Europe/Simferopol": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "UA",
                                                                            "alpha-3": "UKR",
                                                                            "numeric": "804"
                                                                        },
                                                                        "phone": [
                                                                            "+380"
                                                                        ],
                                                                        "emoji": "🇺🇦",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg"
                                                                    },
                                                                    "AE": {
                                                                        "name": "United Arab Emirates",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Dubai": "+04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AE",
                                                                            "alpha-3": "ARE",
                                                                            "numeric": "784"
                                                                        },
                                                                        "phone": [
                                                                            "+971"
                                                                        ],
                                                                        "emoji": "🇦🇪",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg"
                                                                    },
                                                                    "GB": {
                                                                        "name": "United Kingdom",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/London": "+01:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "GB",
                                                                            "alpha-3": "GBR",
                                                                            "numeric": "826"
                                                                        },
                                                                        "phone": [
                                                                            "+44"
                                                                        ],
                                                                        "emoji": "🇬🇧",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg"
                                                                    },
                                                                    "US": {
                                                                        "name": "United States",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Adak": "-09:00",
                                                                            "America/Anchorage": "-08:00",
                                                                            "America/Boise": "-06:00",
                                                                            "America/Chicago": "-05:00",
                                                                            "America/Denver": "-06:00",
                                                                            "America/Detroit": "-04:00",
                                                                            "America/Indiana/Indianapolis": "-04:00",
                                                                            "America/Indiana/Knox": "-05:00",
                                                                            "America/Indiana/Marengo": "-04:00",
                                                                            "America/Indiana/Petersburg": "-04:00",
                                                                            "America/Indiana/Tell_City": "-05:00",
                                                                            "America/Indiana/Vevay": "-04:00",
                                                                            "America/Indiana/Vincennes": "-04:00",
                                                                            "America/Indiana/Winamac": "-04:00",
                                                                            "America/Juneau": "-08:00",
                                                                            "America/Kentucky/Louisville": "-04:00",
                                                                            "America/Kentucky/Monticello": "-04:00",
                                                                            "America/Los_Angeles": "-07:00",
                                                                            "America/Menominee": "-05:00",
                                                                            "America/Metlakatla": "-08:00",
                                                                            "America/New_York": "-04:00",
                                                                            "America/Nome": "-08:00",
                                                                            "America/North_Dakota/Beulah": "-05:00",
                                                                            "America/North_Dakota/Center": "-05:00",
                                                                            "America/North_Dakota/New_Salem": "-05:00",
                                                                            "America/Phoenix": "-07:00",
                                                                            "America/Sitka": "-08:00",
                                                                            "America/Yakutat": "-08:00",
                                                                            "Pacific/Honolulu": "-10:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "US",
                                                                            "alpha-3": "USA",
                                                                            "numeric": "840"
                                                                        },
                                                                        "phone": [
                                                                            "+1"
                                                                        ],
                                                                        "emoji": "🇺🇸",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg"
                                                                    },
                                                                    "UM": {
                                                                        "name": "United States Minor Outlying Islands",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Midway": "-11:00",
                                                                            "Pacific/Wake": "+12:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "UM",
                                                                            "alpha-3": "UMI",
                                                                            "numeric": "581"
                                                                        },
                                                                        "phone": [
                                                                            "+1"
                                                                        ],
                                                                        "emoji": "🇺🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UM.svg"
                                                                    },
                                                                    "UY": {
                                                                        "name": "Uruguay",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Montevideo": "-03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "UY",
                                                                            "alpha-3": "URY",
                                                                            "numeric": "858"
                                                                        },
                                                                        "phone": [
                                                                            "+598"
                                                                        ],
                                                                        "emoji": "🇺🇾",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg"
                                                                    },
                                                                    "UZ": {
                                                                        "name": "Uzbekistan",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Samarkand": "+05:00",
                                                                            "Asia/Tashkent": "+05:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "UZ",
                                                                            "alpha-3": "UZB",
                                                                            "numeric": "860"
                                                                        },
                                                                        "phone": [
                                                                            "+998"
                                                                        ],
                                                                        "emoji": "🇺🇿",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg"
                                                                    },
                                                                    "VU": {
                                                                        "name": "Vanuatu",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Efate": "+11:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "VU",
                                                                            "alpha-3": "VUT",
                                                                            "numeric": "548"
                                                                        },
                                                                        "phone": [
                                                                            "+678"
                                                                        ],
                                                                        "emoji": "🇻🇺",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg"
                                                                    },
                                                                    "VE": {
                                                                        "name": "Venezuela, Bolivarian Republic of",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Caracas": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "VE",
                                                                            "alpha-3": "VEN",
                                                                            "numeric": "862"
                                                                        },
                                                                        "phone": [
                                                                            "+58"
                                                                        ],
                                                                        "emoji": "🇻🇪",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg"
                                                                    },
                                                                    "VN": {
                                                                        "name": "Viet Nam",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Ho_Chi_Minh": "+07:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "VN",
                                                                            "alpha-3": "VNM",
                                                                            "numeric": "704"
                                                                        },
                                                                        "phone": [
                                                                            "+84"
                                                                        ],
                                                                        "emoji": "🇻🇳",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg"
                                                                    },
                                                                    "VG": {
                                                                        "name": "Virgin Islands, British",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/Tortola": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "VG",
                                                                            "alpha-3": "VGB",
                                                                            "numeric": "092"
                                                                        },
                                                                        "phone": [
                                                                            "+1-284"
                                                                        ],
                                                                        "emoji": "🇻🇬",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VG.svg"
                                                                    },
                                                                    "VI": {
                                                                        "name": "Virgin Islands, U.S.",
                                                                        "region": "Americas",
                                                                        "timezones": {
                                                                            "America/St_Thomas": "-04:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "VI",
                                                                            "alpha-3": "VIR",
                                                                            "numeric": "850"
                                                                        },
                                                                        "phone": [
                                                                            "+1-340"
                                                                        ],
                                                                        "emoji": "🇻🇮",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VI.svg"
                                                                    },
                                                                    "WF": {
                                                                        "name": "Wallis and Futuna",
                                                                        "region": "Oceania",
                                                                        "timezones": {
                                                                            "Pacific/Wallis": "+12:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "WF",
                                                                            "alpha-3": "WLF",
                                                                            "numeric": "876"
                                                                        },
                                                                        "phone": [
                                                                            "+681"
                                                                        ],
                                                                        "emoji": "🇼🇫",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg"
                                                                    },
                                                                    "YE": {
                                                                        "name": "Yemen",
                                                                        "region": "Asia",
                                                                        "timezones": {
                                                                            "Asia/Aden": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "YE",
                                                                            "alpha-3": "YEM",
                                                                            "numeric": "887"
                                                                        },
                                                                        "phone": [
                                                                            "+967"
                                                                        ],
                                                                        "emoji": "🇾🇪",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg"
                                                                    },
                                                                    "ZM": {
                                                                        "name": "Zambia",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Lusaka": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "ZM",
                                                                            "alpha-3": "ZMB",
                                                                            "numeric": "894"
                                                                        },
                                                                        "phone": [
                                                                            "+260"
                                                                        ],
                                                                        "emoji": "🇿🇲",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg"
                                                                    },
                                                                    "ZW": {
                                                                        "name": "Zimbabwe",
                                                                        "region": "Africa",
                                                                        "timezones": {
                                                                            "Africa/Harare": "+02:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "ZW",
                                                                            "alpha-3": "ZWE",
                                                                            "numeric": "716"
                                                                        },
                                                                        "phone": [
                                                                            "+263"
                                                                        ],
                                                                        "emoji": "🇿🇼",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg"
                                                                    },
                                                                    "AX": {
                                                                        "name": "Åland Islands",
                                                                        "region": "Europe",
                                                                        "timezones": {
                                                                            "Europe/Mariehamn": "+03:00"
                                                                        },
                                                                        "iso": {
                                                                            "code": "AX",
                                                                            "alpha-3": "ALA",
                                                                            "numeric": "248"
                                                                        },
                                                                        "phone": [
                                                                            "+358-18"
                                                                        ],
                                                                        "emoji": "🇦🇽",
                                                                        "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg"
                                                                    }
                                                                }
                                                            },
                                                            "template": "<span class=\"hide-this-field\">{{ item.name }}</span><span> {{ item.phone }} ({{ item.iso.code }} <img src=\"{{ item.image }}\" style=\"width: 25px; transform: translateY(-2px);\" />)</span>",
                                                            "customDefaultValue": "value = {\n     \"name\": \"United Kingdom\",\n    \"region\": \"Europe\",\n    \"timezones\": {\n      \"Europe/London\": \"+01:00\"\n    },\n    \"iso\": {\n      \"code\": \"UK\",\n      \"alpha-3\": \"GBR\",\n      \"numeric\": \"826\"\n    },\n    \"phone\": [\n      \"+44\"\n    ],\n    \"emoji\": \"🇬🇧\",\n    \"image\": \"https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg\"\n}\n",
                                                            "validate": {
                                                                "required": true
                                                            },
                                                            "validateWhenHidden": false,
                                                            "key": "phoneICJs",
                                                            "type": "select",
                                                            "input": true
                                                        },
                                                        {
                                                            "label": "Phone Number",
                                                            "calculateValue": "const code = row.phoneICJs?.phone?.[0] || '';\nconst num = row.contactPhoneNumberJs || '';\nvalue = code + num;",
                                                            "key": "mobNumberIJs",
                                                            "type": "hidden",
                                                            "input": true,
                                                            "tableView": false
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "legend": "Registered Office Address",
                                            "customClass": "small-header address-label",
                                            "key": "fieldSet2",
                                            "type": "fieldset",
                                            "label": "Registered Office Address",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "Columns",
                                                    "columns": [
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Address Line 1",
                                                                    "tableView": true,
                                                                    "validate": {
                                                                        "required": true
                                                                    },
                                                                    "key": "addressLine1Js",
                                                                    "type": "textfield",
                                                                    "autoExpand": false,
                                                                    "input": true
                                                                }
                                                            ],
                                                            "size": "md",
                                                            "width": 12,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "currentWidth": 12
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Address Line 2",
                                                                    "tableView": true,
                                                                    "key": "addressLine2Js",
                                                                    "type": "textfield",
                                                                    "input": true
                                                                }
                                                            ],
                                                            "width": 12,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md",
                                                            "currentWidth": 12
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Address Line 3",
                                                                    "tableView": true,
                                                                    "key": "addressLine3Js",
                                                                    "type": "textfield",
                                                                    "input": true
                                                                }
                                                            ],
                                                            "size": "md",
                                                            "width": 12,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "currentWidth": 12
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "City",
                                                                    "tableView": true,
                                                                    "validate": {
                                                                        "required": true
                                                                    },
                                                                    "key": "cityJs",
                                                                    "type": "textfield",
                                                                    "input": true
                                                                }
                                                            ],
                                                            "size": "md",
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "currentWidth": 4
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Postal code",
                                                                    "tableView": true,
                                                                    "validate": {
                                                                        "required": true
                                                                    },
                                                                    "key": "postalCodeJs",
                                                                    "type": "textfield",
                                                                    "input": true
                                                                }
                                                            ],
                                                            "size": "md",
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "width": 4,
                                                            "currentWidth": 4
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Country",
                                                                    "widget": "choicesjs",
                                                                    "uniqueOptions": true,
                                                                    "tableView": true,
                                                                    "dataSrc": "url",
                                                                    "data": {
                                                                        "url": "https://meshid.app/api/system/isocountries",
                                                                        "headers": [
                                                                            {
                                                                                "key": "",
                                                                                "value": ""
                                                                            }
                                                                        ]
                                                                    },
                                                                    "valueProperty": "label",
                                                                    "validate": {
                                                                        "required": true
                                                                    },
                                                                    "key": "address_CountryJs",
                                                                    "type": "select",
                                                                    "input": true,
                                                                    "disableLimit": false
                                                                }
                                                            ],
                                                            "size": "md",
                                                            "width": 4,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "currentWidth": 4
                                                        }
                                                    ],
                                                    "key": "columns17",
                                                    "type": "columns",
                                                    "input": false,
                                                    "tableView": false
                                                }
                                            ]
                                        },
                                        {
                                            "legend": "Details of Birth",
                                            "customClass": "small-header",
                                            "key": "fieldSet5Js",
                                            "type": "fieldset",
                                            "label": "Details of Birth",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "Date of Birth",
                                                    "format": " dd/MM/yyyy",
                                                    "customClass": "custom-comp-date",
                                                    "tableView": false,
                                                    "enableMinDateInput": false,
                                                    "datePicker": {
                                                        "maxDate": "moment()",
                                                        "disableWeekends": false,
                                                        "disableWeekdays": false
                                                    },
                                                    "enableMaxDateInput": true,
                                                    "enableTime": false,
                                                    "customDefaultValue": "value = row.MID_NP_DOB",
                                                    "validate": {
                                                        "required": true,
                                                        "customMessage": "Date of Birth is required"
                                                    },
                                                    "key": "dobJs",
                                                    "type": "datetime",
                                                    "input": true,
                                                    "widget": {
                                                        "type": "calendar",
                                                        "displayInTimezone": "viewer",
                                                        "locale": "en",
                                                        "useLocaleSettings": false,
                                                        "allowInput": true,
                                                        "mode": "single",
                                                        "enableTime": false,
                                                        "noCalendar": false,
                                                        "format": " dd/MM/yyyy",
                                                        "hourIncrement": 1,
                                                        "minuteIncrement": 1,
                                                        "time_24hr": false,
                                                        "minDate": null,
                                                        "disableWeekends": false,
                                                        "disableWeekdays": false,
                                                        "maxDate": "moment()"
                                                    }
                                                },
                                                {
                                                    "label": "Date of Birth",
                                                    "calculateValue": "if (row.dobJs) {\r\n  const dateStr = row.dobJs;\r\n  \r\n  // Extract the year, month, and day from the date string\r\n  const [year, month, day] = dateStr.substring(0, 10).split(\"-\");\r\n  \r\n  // Create a formatted date string\r\n  const formattedDate = `${day}/${month}/${year}`;\r\n  \r\n  value = formattedDate;\r\n}\r\n",
                                                    "key": "dobFormattedJs",
                                                    "type": "hidden",
                                                    "input": true,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "Columns",
                                                    "columns": [
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Town/City of birth",
                                                                    "tableView": true,
                                                                    "customDefaultValue": "value = row.MID_NP_Place_Of_Birth",
                                                                    "validate": {
                                                                        "required": true
                                                                    },
                                                                    "key": "cityOfBirthJs",
                                                                    "type": "textfield",
                                                                    "input": true
                                                                }
                                                            ],
                                                            "width": 6,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md",
                                                            "currentWidth": 6
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Country of birth",
                                                                    "widget": "choicesjs",
                                                                    "uniqueOptions": true,
                                                                    "tableView": true,
                                                                    "dataSrc": "url",
                                                                    "data": {
                                                                        "url": "https://meshid.app/api/system/isocountries",
                                                                        "headers": [
                                                                            {
                                                                                "key": "",
                                                                                "value": ""
                                                                            }
                                                                        ]
                                                                    },
                                                                    "valueProperty": "label",
                                                                    "customDefaultValue": "value = row.MID_NP_Country_Of_Birth",
                                                                    "validate": {
                                                                        "required": true
                                                                    },
                                                                    "key": "countryOfBirthJs",
                                                                    "type": "select",
                                                                    "input": true,
                                                                    "disableLimit": false
                                                                }
                                                            ],
                                                            "width": 6,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md",
                                                            "currentWidth": 6
                                                        }
                                                    ],
                                                    "key": "columns9Js",
                                                    "type": "columns",
                                                    "input": false,
                                                    "tableView": false
                                                }
                                            ]
                                        },
                                        {
                                            "legend": "Details of Nationality",
                                            "customClass": "small-header",
                                            "key": "fieldSet10Js",
                                            "type": "fieldset",
                                            "label": " Details of Nationality",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "Nationality",
                                                    "widget": "choicesjs",
                                                    "uniqueOptions": true,
                                                    "tableView": true,
                                                    "dataSrc": "url",
                                                    "data": {
                                                        "url": "https://meshid.app/api/system/isocountries",
                                                        "headers": [
                                                            {
                                                                "key": "",
                                                                "value": ""
                                                            }
                                                        ]
                                                    },
                                                    "valueProperty": "label",
                                                    "customDefaultValue": "value = row.MID_NP_Nationality\n",
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "nationalityJs",
                                                    "type": "select",
                                                    "input": true,
                                                    "disableLimit": false
                                                },
                                                {
                                                    "label": "Do you have any other nationalities?",
                                                    "optionsLabelPosition": "right",
                                                    "inline": true,
                                                    "tableView": false,
                                                    "values": [
                                                        {
                                                            "label": "Yes",
                                                            "value": "yes",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "No",
                                                            "value": "no",
                                                            "shortcut": ""
                                                        }
                                                    ],
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "doYouHaveOtherNationalitiesJs",
                                                    "type": "radio",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Additional Nationality",
                                                    "widget": "choicesjs",
                                                    "uniqueOptions": true,
                                                    "tableView": true,
                                                    "multiple": true,
                                                    "dataSrc": "url",
                                                    "data": {
                                                        "url": "https://meshid.app/api/system/isocountries",
                                                        "headers": [
                                                            {
                                                                "key": "",
                                                                "value": ""
                                                            }
                                                        ]
                                                    },
                                                    "valueProperty": "label",
                                                    "customDefaultValue": "value = row.MID_NP_Dual_Nationality",
                                                    "key": "nationalityAddJs",
                                                    "customConditional": "show = row.doYouHaveOtherNationalitiesJs === 'yes'",
                                                    "type": "select",
                                                    "input": true,
                                                    "disableLimit": false
                                                }
                                            ]
                                        },
                                        {
                                            "label": "Tax Information ",
                                            "openWhenEmpty": true,
                                            "hideLabel": true,
                                            "tableView": false,
                                            "templates": {
                                                "header": "<legend>Tax Information</legend>",
                                                "row": "<div class=\"row\">\r\n  {% util.eachComponent(components, function(component) { %}\r\n    {% if (component.type !== 'hidden' && getView(component, row[component.key]) && isVisibleInRow(component)) { %}\r\n      <div class=\"col-sm-2 {{ component.customClass }}\">\r\n        {{ getView(component, row[component.key]) }}\r\n      </div>\r\n    {% } %}\r\n  {% }) %}\r\n  {% if (!instance.options.readOnly && !instance.disabled) { %}\r\n    <div class=\"col-sm-2\">\r\n      <div class=\"btn-group pull-right\">\r\n        <button class=\"btn btn-default btn-light btn-sm editRow\"><i class=\"{{ iconClass('edit') }}\"></i></button>\r\n        {% if (!instance.hasRemoveButtons || instance.hasRemoveButtons()) { %}\r\n          <button class=\"btn btn-danger btn-sm removeRow\"><i class=\"{{ iconClass('trash') }}\"></i></button>\r\n        {% } %}\r\n      </div>\r\n    </div>\r\n  {% } %}\r\n</div>\r\n"
                                            },
                                            "addAnother": "Add Another Tax Jurisdiction",
                                            "saveRow": "Save Tax Jurisdiction",
                                            "rowDrafts": false,
                                            "key": "taxJs",
                                            "type": "editgrid",
                                            "input": true,
                                            "components": [
                                                {
                                                    "label": "Tax Residency ",
                                                    "widget": "choicesjs",
                                                    "customClass": "showThis tags tag-a",
                                                    "uniqueOptions": true,
                                                    "tableView": true,
                                                    "dataSrc": "url",
                                                    "data": {
                                                        "url": "https://meshid.app/api/system/isocountries",
                                                        "headers": [
                                                            {
                                                                "key": "",
                                                                "value": ""
                                                            }
                                                        ]
                                                    },
                                                    "valueProperty": "label",
                                                    "template": "<span style=\"color: black;\">{{item.label}}</span>\n",
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "jurisdictionJs",
                                                    "type": "select",
                                                    "input": true,
                                                    "disableLimit": false
                                                },
                                                {
                                                    "label": "Please explain the basis of your tax residency.",
                                                    "key": "taxResidencyBasisExplanationJs",
                                                    "type": "textfield",
                                                    "input": true,
                                                    "tableView": true,
                                                    "autoExpand": false,
                                                    "rows": 4,
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "customConditional": "var rbiCbiCountries = ['Antigua and Barbuda','Bahamas','Bahrain','Barbados','Cyprus','Dominica','Grenada','Malta','Panama','Saint Kitts and Nevis','Saint Lucia','Seychelles','Turks & Caicos Islands','Turks and Caicos Islands','United Arab Emirates','Vanuatu'];\nshow = rbiCbiCountries.indexOf(row.jurisdictionJs) !== -1;"
                                                },
                                                {
                                                    "label": "Do you have a TIN?",
                                                    "optionsLabelPosition": "right",
                                                    "inline": true,
                                                    "tableView": false,
                                                    "values": [
                                                        {
                                                            "label": "Yes",
                                                            "value": "yes",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "No",
                                                            "value": "no",
                                                            "shortcut": ""
                                                        }
                                                    ],
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "doYouJs",
                                                    "type": "radio",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Tax Identification Number",
                                                    "customClass": "tin",
                                                    "tableView": true,
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "taxReferenceNumberJs",
                                                    "customConditional": "show = row.doYouJs === 'yes'",
                                                    "type": "textfield",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Please specify the reason",
                                                    "tableView": true,
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "pleaseSpecifyTheReasonJs",
                                                    "customConditional": "show = row.doYouJs === 'no'",
                                                    "type": "textfield",
                                                    "input": true
                                                }
                                            ]
                                        },
                                        {
                                            "label": "HTML",
                                            "tag": "div",
                                            "attrs": [
                                                {
                                                    "attr": "",
                                                    "value": ""
                                                }
                                            ],
                                            "content": "<div class = 'glossary-modal glossary-hide'>\r\n  <div class=\"openModalABtn open-modal no-border\">\r\n  <div class=\"g-tooltip\" id=\"customTooltip\" style=\"background-color: var(--client-secondary-color)\">PEP Definitions</div>\r\n  </div>\r\n</div>",
                                            "refreshOnChange": false,
                                            "key": "modalZ6Js",
                                            "type": "htmlelement",
                                            "input": false,
                                            "tableView": false
                                        },
                                        {
                                            "legend": "Other information",
                                            "key": "fieldset18Js",
                                            "type": "fieldset",
                                            "label": "Other information",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "Other Details",
                                                    "hidden": true,
                                                    "tableView": false,
                                                    "questions": [
                                                        {
                                                            "label": "Is the entity able to issue bearer shares? ",
                                                            "value": "a"
                                                        },
                                                        {
                                                            "label": "Does the entity have any bearer shares in issue? ",
                                                            "value": "b"
                                                        },
                                                        {
                                                            "label": "Is the entity aware that any of its senior managing officials or close family members thereof being Politically Exposed Persons?",
                                                            "value": "c"
                                                        }
                                                    ],
                                                    "values": [
                                                        {
                                                            "label": "Yes",
                                                            "value": "yes"
                                                        },
                                                        {
                                                            "label": "No",
                                                            "value": "no"
                                                        }
                                                    ],
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "otherDetailsJs",
                                                    "type": "survey",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Do you believe you or a close family member meets the definition of Politically Exposed Person?",
                                                    "optionsLabelPosition": "right",
                                                    "inline": true,
                                                    "tableView": false,
                                                    "values": [
                                                        {
                                                            "label": "Yes",
                                                            "value": "yes",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "No",
                                                            "value": "no",
                                                            "shortcut": ""
                                                        }
                                                    ],
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "customConditional": "show = row.chooseType === 'individual'",
                                                    "key": "doYouCloseFamilyMemberJs",
                                                    "type": "radio",
                                                    "input": true
                                                }
                                            ]
                                        },
                                        {
                                            "label": "Politically Exposed Person(s)",
                                            "customClass": "pep",
                                            "openWhenEmpty": true,
                                            "hideLabel": true,
                                            "tableView": false,
                                            "templates": {
                                                "header": "<legend>Politically Exposed Person (PEP)</legend>",
                                                "row": "<div class=\"row\">\r\n  {% util.eachComponent(components, function(component) { %}\r\n    {% if (component.type !== 'hidden' && getView(component, row[component.key]) && isVisibleInRow(component)) { %}\r\n      <div class=\"col-sm-2 {{ component.customClass }}\">\r\n        {{ getView(component, row[component.key]) }}\r\n      </div>\r\n    {% } %}\r\n  {% }) %}\r\n  {% if (!instance.options.readOnly && !instance.disabled) { %}\r\n    <div class=\"col-sm-2\">\r\n      <div class=\"btn-group pull-right\">\r\n        <button class=\"btn btn-default btn-light btn-sm editRow\"><i class=\"{{ iconClass('edit') }}\"></i></button>\r\n        {% if (!instance.hasRemoveButtons || instance.hasRemoveButtons()) { %}\r\n          <button class=\"btn btn-danger btn-sm removeRow\"><i class=\"{{ iconClass('trash') }}\"></i></button>\r\n        {% } %}\r\n      </div>\r\n    </div>\r\n  {% } %}\r\n</div>\r\n"
                                            },
                                            "addAnother": "Add another PEP",
                                            "saveRow": "Save and add another PEP",
                                            "rowDrafts": false,
                                            "key": "pepJs",
                                            "tags": [
                                                "Risk",
                                                "Grid"
                                            ],
                                            "customConditional": "show = (row.chooseType === 'individual' && row.doYouCloseFamilyMemberJs === 'yes')",
                                            "logic": [
                                                {
                                                    "name": "Clear",
                                                    "trigger": {
                                                        "type": "event",
                                                        "event": "deletePEPs"
                                                    },
                                                    "actions": [
                                                        {
                                                            "name": "Clear",
                                                            "type": "value",
                                                            "value": "value = ''"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "type": "editgrid",
                                            "input": true,
                                            "components": [
                                                {
                                                    "label": "Columns",
                                                    "columns": [
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "First name",
                                                                    "customClass": "showThis names first",
                                                                    "tableView": true,
                                                                    "customDefaultValue": "value = row.MID_NP_First",
                                                                    "validate": {
                                                                        "required": true
                                                                    },
                                                                    "key": "first1Js",
                                                                    "type": "textfield",
                                                                    "input": true
                                                                }
                                                            ],
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md",
                                                            "currentWidth": 4,
                                                            "width": 4
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Middle name",
                                                                    "customClass": "names",
                                                                    "tableView": true,
                                                                    "customDefaultValue": "value = row.MID_NP_Middle",
                                                                    "key": "middle1Js",
                                                                    "type": "textfield",
                                                                    "input": true
                                                                }
                                                            ],
                                                            "size": "md",
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "currentWidth": 4,
                                                            "width": 4
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "Last name",
                                                                    "customClass": "showThis names",
                                                                    "tableView": true,
                                                                    "customDefaultValue": "value = row.MID_NP_Last",
                                                                    "validate": {
                                                                        "required": true
                                                                    },
                                                                    "key": "last1Js",
                                                                    "type": "textfield",
                                                                    "input": true
                                                                }
                                                            ],
                                                            "size": "md",
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "width": 4,
                                                            "currentWidth": 4
                                                        }
                                                    ],
                                                    "key": "columns7Js",
                                                    "type": "columns",
                                                    "input": false,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "Is this declaration in respect of a family member or close associate?",
                                                    "widget": "choicesjs",
                                                    "tableView": true,
                                                    "data": {
                                                        "values": [
                                                            {
                                                                "label": "Yes – a family member",
                                                                "value": "familyMember"
                                                            },
                                                            {
                                                                "label": "Yes – a close associate",
                                                                "value": "closeAssociate"
                                                            },
                                                            {
                                                                "label": "No – the investor is making the declaration on their own behalf",
                                                                "value": "investorBehalf"
                                                            }
                                                        ]
                                                    },
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "customConditional": "show = data.tabContainerComp.chooseType === 'individual'",
                                                    "key": "declarationInRespectOfJs",
                                                    "type": "select",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Is this declaration in respect of a family member or close associate of the senior managing official?",
                                                    "widget": "choicesjs",
                                                    "tableView": true,
                                                    "data": {
                                                        "values": [
                                                            {
                                                                "label": "Yes – a family member",
                                                                "value": "familyMember"
                                                            },
                                                            {
                                                                "label": "Yes – a close associate",
                                                                "value": "closeAssociate"
                                                            },
                                                            {
                                                                "label": "No – the investor is making the declaration on their own behalf",
                                                                "value": "investorBehalf"
                                                            }
                                                        ]
                                                    },
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "declarationInRespectOf1Js",
                                                    "customConditional": "show = row.chooseType === 'entity'",
                                                    "type": "select",
                                                    "input": true
                                                },
                                                {
                                                    "label": "What relation is the family member?",
                                                    "widget": "choicesjs",
                                                    "tableView": true,
                                                    "data": {
                                                        "values": [
                                                            {
                                                                "label": "Spouse or partner held as equivalent to a spouse",
                                                                "value": "spousePartner"
                                                            },
                                                            {
                                                                "label": "Parent",
                                                                "value": "parent"
                                                            },
                                                            {
                                                                "label": "Child",
                                                                "value": "child"
                                                            },
                                                            {
                                                                "label": "Sibling",
                                                                "value": "sibling"
                                                            },
                                                            {
                                                                "label": "Parent-in-law",
                                                                "value": "parentInLaw"
                                                            },
                                                            {
                                                                "label": "Grandchild",
                                                                "value": "grandchild"
                                                            },
                                                            {
                                                                "label": "Other",
                                                                "value": "other"
                                                            }
                                                        ]
                                                    },
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "familyMemberRelationJs",
                                                    "customConditional": "show = row.declarationInRespectOfJs === 'familyMember' || row.declarationInRespectOf1Js === 'familyMember'",
                                                    "type": "select",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Please explain",
                                                    "tableView": true,
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "familyMemberRelationOtherJs",
                                                    "customConditional": "show = row.declarationInRespectOfJs === 'familyMember' && row.familyMemberRelationJs === 'other' || row.declarationInRespectOf1Js === 'familyMember' && row.familyMemberRelationJs === 'other'",
                                                    "type": "textfield",
                                                    "input": true
                                                },
                                                {
                                                    "label": "What is the business/financial relationship between the investor and the close associate?",
                                                    "tableView": true,
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "closeAssociateRelationshipJs",
                                                    "customConditional": "show = row.declarationInRespectOfJs === 'closeAssociate'",
                                                    "type": "textfield",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Identify the role held by the PEP",
                                                    "widget": "choicesjs",
                                                    "tableView": true,
                                                    "data": {
                                                        "values": [
                                                            {
                                                                "label": "Head of State or Head of Government",
                                                                "value": "a"
                                                            },
                                                            {
                                                                "label": "Senior politician or other important official of a political party",
                                                                "value": "b"
                                                            },
                                                            {
                                                                "label": "Senior government official",
                                                                "value": "c"
                                                            },
                                                            {
                                                                "label": "Senior member of the judiciary",
                                                                "value": "d"
                                                            },
                                                            {
                                                                "label": "Senior military officer",
                                                                "value": "e"
                                                            },
                                                            {
                                                                "label": "Senior executive of a state-owned entity",
                                                                "value": "f"
                                                            },
                                                            {
                                                                "label": "Unsure",
                                                                "value": "g"
                                                            }
                                                        ]
                                                    },
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "pepRoleJs",
                                                    "type": "select",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Describe the role held by the PEP",
                                                    "tableView": true,
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "describeRoleJs",
                                                    "customConditional": "show = row.pepRoleJs && row.pepRoleJs.length > 0 ",
                                                    "type": "textfield",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Did the role held by the PEP allow the power to direct the spending of significant sums of money?",
                                                    "optionsLabelPosition": "right",
                                                    "inline": true,
                                                    "tableView": false,
                                                    "values": [
                                                        {
                                                            "label": "Yes",
                                                            "value": "yes",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "No",
                                                            "value": "no",
                                                            "shortcut": ""
                                                        }
                                                    ],
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "roleHeldJs",
                                                    "type": "radio",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Columns",
                                                    "columns": [
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "On what date did the PEP begin their role?",
                                                                    "format": " dd/MM/yyyy",
                                                                    "customClass": "custom-comp-date",
                                                                    "tableView": false,
                                                                    "enableMinDateInput": false,
                                                                    "datePicker": {
                                                                        "maxDate": "moment()",
                                                                        "disableWeekends": false,
                                                                        "disableWeekdays": false
                                                                    },
                                                                    "enableMaxDateInput": true,
                                                                    "enableTime": false,
                                                                    "customDefaultValue": "value = row.MID_NP_DOB;",
                                                                    "calculateValue": "if (value) {\r\n  const dateStr = value;\r\n\r\n  const [year, month, day] = dateStr.substring(0, 10).split(\"-\");\r\n\r\n  const formattedDate = `${day}/${month}/${year}`;\r\n\r\n  row[`${component.key}Cc`] = formattedDate;\r\n}\r\n",
                                                                    "validate": {
                                                                        "required": true,
                                                                        "customMessage": "Date of appointment is required"
                                                                    },
                                                                    "key": "dateOfAppointmentJs",
                                                                    "type": "datetime",
                                                                    "input": true,
                                                                    "widget": {
                                                                        "type": "calendar",
                                                                        "displayInTimezone": "viewer",
                                                                        "locale": "en",
                                                                        "useLocaleSettings": false,
                                                                        "allowInput": true,
                                                                        "mode": "single",
                                                                        "enableTime": false,
                                                                        "noCalendar": false,
                                                                        "format": " dd/MM/yyyy",
                                                                        "hourIncrement": 1,
                                                                        "minuteIncrement": 1,
                                                                        "time_24hr": false,
                                                                        "minDate": null,
                                                                        "disableWeekends": false,
                                                                        "disableWeekdays": false,
                                                                        "maxDate": "moment()"
                                                                    }
                                                                }
                                                            ],
                                                            "width": 6,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md",
                                                            "currentWidth": 6
                                                        },
                                                        {
                                                            "components": [
                                                                {
                                                                    "label": "The PEP is currently still in their role",
                                                                    "tableView": false,
                                                                    "key": "pepStillInRoleJs",
                                                                    "type": "checkbox",
                                                                    "input": true
                                                                },
                                                                {
                                                                    "label": "On what date did the PEP cease to act in their role?",
                                                                    "format": " dd/MM/yyyy",
                                                                    "customClass": "custom-comp-date",
                                                                    "tableView": false,
                                                                    "enableMinDateInput": false,
                                                                    "datePicker": {
                                                                        "maxDate": "moment()",
                                                                        "disableWeekends": false,
                                                                        "disableWeekdays": false
                                                                    },
                                                                    "enableMaxDateInput": true,
                                                                    "enableTime": false,
                                                                    "customDefaultValue": "value = row.MID_NP_DOB;",
                                                                    "calculateValue": "if (value) {\r\n  const dateStr = value;\r\n\r\n  const [year, month, day] = dateStr.substring(0, 10).split(\"-\");\r\n\r\n  const formattedDate = `${day}/${month}/${year}`;\r\n\r\n  row[`${component.key}Cc`] = formattedDate;\r\n}\r\n",
                                                                    "validate": {
                                                                        "required": true,
                                                                        "customMessage": "Date of resignation is required"
                                                                    },
                                                                    "conditional": {
                                                                        "show": "true",
                                                                        "when": "pepStillInRoleJs",
                                                                        "eq": "false"
                                                                    },
                                                                    "key": "dateOfResignationJs",
                                                                    "type": "datetime",
                                                                    "input": true,
                                                                    "widget": {
                                                                        "type": "calendar",
                                                                        "displayInTimezone": "viewer",
                                                                        "locale": "en",
                                                                        "useLocaleSettings": false,
                                                                        "allowInput": true,
                                                                        "mode": "single",
                                                                        "enableTime": false,
                                                                        "noCalendar": false,
                                                                        "format": " dd/MM/yyyy",
                                                                        "hourIncrement": 1,
                                                                        "minuteIncrement": 1,
                                                                        "time_24hr": false,
                                                                        "minDate": null,
                                                                        "disableWeekends": false,
                                                                        "disableWeekdays": false,
                                                                        "maxDate": "moment()"
                                                                    }
                                                                }
                                                            ],
                                                            "width": 6,
                                                            "offset": 0,
                                                            "push": 0,
                                                            "pull": 0,
                                                            "size": "md",
                                                            "currentWidth": 6
                                                        }
                                                    ],
                                                    "key": "columns1Js",
                                                    "type": "columns",
                                                    "input": false,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "In what country was/is the role held by the PEP?",
                                                    "widget": "choicesjs",
                                                    "uniqueOptions": true,
                                                    "tableView": true,
                                                    "dataSrc": "url",
                                                    "data": {
                                                        "url": "https://meshid.app/api/system/isocountries",
                                                        "headers": [
                                                            {
                                                                "key": "",
                                                                "value": ""
                                                            }
                                                        ]
                                                    },
                                                    "valueProperty": "label",
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "jurJs",
                                                    "type": "select",
                                                    "input": true,
                                                    "disableLimit": false
                                                },
                                                {
                                                    "label": "Please provide any further information on the PEP or the role held that may be useful when reviewing the investor",
                                                    "autoExpand": false,
                                                    "tableView": true,
                                                    "key": "additionalInfoJs",
                                                    "type": "textarea",
                                                    "input": true
                                                },
                                                {
                                                    "label": "PEP",
                                                    "customClass": "hide-this-field showThis tags tag-c",
                                                    "tableView": true,
                                                    "customDefaultValue": "value = 'PEP'",
                                                    "calculateValue": "value = 'PEP'",
                                                    "key": "role3Js",
                                                    "type": "textfield",
                                                    "input": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "customConditional": "show = data.isJointInvestment === 'yes';"
                        },
                        {
                            "label": "Source of Wealth and Source of Funds [Joint]",
                            "key": "sourceOfWealthAndSourceOfFundsJointJs",
                            "components": [
                                {
                                    "key": "fieldSet112Js",
                                    "customConditional": "show = row.chooseType == 'individual' && row.isJointInvestment == 'yes'",
                                    "type": "fieldset",
                                    "label": "",
                                    "input": false,
                                    "tableView": false,
                                    "components": [
                                        {
                                            "label": "HTML",
                                            "tag": "div",
                                            "attrs": [
                                                {
                                                    "attr": "",
                                                    "value": ""
                                                }
                                            ],
                                            "content": "Source of Wealth and Source of Funds",
                                            "refreshOnChange": false,
                                            "customClass": "page-title",
                                            "key": "html34Js",
                                            "type": "htmlelement",
                                            "input": false,
                                            "tableView": false
                                        },
                                        {
                                            "label": "HTML",
                                            "tag": "div",
                                            "attrs": [
                                                {
                                                    "attr": "",
                                                    "value": ""
                                                }
                                            ],
                                            "content": "<section>\nUnder Guernsey regulations, we are required to obtain information on an investor’s ‘Source of Wealth’ and ‘Source of Funds’.<br><br>\nA customer’s ‘Source of Wealth’ are the activities that have generated the total net worth of the customer.<br><br>\nSeparately, a customer’s ‘Source of Funds’ are the activities that have generated the capital being invested in this onboarding process.<br><br>\nA customer’s ‘Source of Wealth’ and ‘Source of Funds’ may not necessarily be the same.<br><br>\nPlease note that one word or vague answers will not be accepted.\n</section>\n",
                                            "refreshOnChange": false,
                                            "customClass": "note noteB",
                                            "key": "html1Js",
                                            "type": "htmlelement",
                                            "input": false,
                                            "tableView": false
                                        },
                                        {
                                            "label": "Do you have any income attributable to the following industries?",
                                            "widget": "choicesjs",
                                            "tableView": true,
                                            "multiple": true,
                                            "data": {
                                                "values": [
                                                    {
                                                        "label": "Oil, gas, mining, or similar extraction",
                                                        "value": "a"
                                                    },
                                                    {
                                                        "label": "Pharmaceutical production or distribution",
                                                        "value": "b"
                                                    },
                                                    {
                                                        "label": "Cryptocurrencies or other decentralised finance",
                                                        "value": "c"
                                                    },
                                                    {
                                                        "label": "Global shipping",
                                                        "value": "d"
                                                    },
                                                    {
                                                        "label": "Military or Defence",
                                                        "value": "e"
                                                    },
                                                    {
                                                        "label": "Gambling",
                                                        "value": "f"
                                                    },
                                                    {
                                                        "label": "None of the above",
                                                        "value": "g"
                                                    }
                                                ]
                                            },
                                            "key": "doYouHaveAnyIncomeAttributableToTheFollowingIndustriesJs",
                                            "type": "select",
                                            "input": true,
                                            "calculateValue": "if (Array.isArray(value) && value.includes('g')) { value = ['g']; }",
                                            "validate": {
                                                "required": true
                                            }
                                        },
                                        {
                                            "label": "Please list the countries that have generated your Source of Wealth.",
                                            "widget": "choicesjs",
                                            "uniqueOptions": true,
                                            "tableView": true,
                                            "multiple": true,
                                            "dataSrc": "url",
                                            "data": {
                                                "url": "https://meshid.app/api/system/isocountries",
                                                "headers": [
                                                    {
                                                        "key": "",
                                                        "value": ""
                                                    }
                                                ]
                                            },
                                            "valueProperty": "label",
                                            "validate": {
                                                "required": true
                                            },
                                            "key": "generatedyourSourceofWealthJs",
                                            "type": "select",
                                            "input": true,
                                            "disableLimit": false
                                        },
                                        {
                                            "key": "fieldsetJointSof",
                                            "type": "fieldset",
                                            "label": "",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "Source Of Wealth",
                                                    "optionsLabelPosition": "right",
                                                    "description": "Please select from the options below to provide details of your source of wealth and source of funds.",
                                                    "customClass": "sof custom-option zeta-sof",
                                                    "hideLabel": true,
                                                    "tableView": false,
                                                    "values": [
                                                        {
                                                            "label": "Employment",
                                                            "value": "a",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "Investments",
                                                            "value": "b",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "Gifts/Inheritance",
                                                            "value": "c",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "Other",
                                                            "value": "d",
                                                            "shortcut": ""
                                                        }
                                                    ],
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "validateWhenHidden": false,
                                                    "key": "sofJs",
                                                    "type": "selectboxes",
                                                    "input": true,
                                                    "inputType": "checkbox"
                                                }
                                            ]
                                        },
                                        {
                                            "legend": "<i class=\"fa-solid fa-briefcase\"></i> Employment",
                                            "customClass": "sof-ques-fields",
                                            "key": "fieldSet49Js",
                                            "customConditional": "show = row.sofJs.a",
                                            "type": "fieldset",
                                            "label": "",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "Proof of employment from Joint Account Holder",
                                                    "calculateValue": "let res = false;\nconst docs = row.EDDdoc.additionalDocRequests;\n\nif (Array.isArray(docs)) {\n  docs.forEach((ele) => {\n    if (\n      ele.name == 'Proof of employment from Main Account Holder' ||\n      ele.name == 'Proof of employment from Joint Account Holder'\n    ) {\n      res = true;\n    }\n  });\n}\n\nvalue = {};\n\nif (res) {\n  value.type = \"Other\";\n  value.purposesOfUse = [\"ProofOfEmploymentFromJointAccountHolder\"];\n  value.fields = {\"Notes\": \"Please upload any of the following document types for the relevant account holder:\\n\\n- Letter from Employer or contract of employment confirming income, occupation, name and address of the business\\n\\nIf you believe the uploaded document requires explanation, please provide that explanation in a word document also to be uploaded here.\"};\n  value.customEvidenceType = component.label;\n} else {\n  value = ''\n}",
                                                    "key": "sofJsa",
                                                    "tags": [
                                                        "EVD"
                                                    ],
                                                    "type": "hidden",
                                                    "input": true,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "Is this option being selected for Source of Wealth or Source of Funds?",
                                                    "optionsLabelPosition": "right",
                                                    "inline": false,
                                                    "tableView": false,
                                                    "values": [
                                                        {
                                                            "label": "Source of Wealth",
                                                            "value": "a",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "Source of Funds",
                                                            "value": "b",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "Source of Wealth and Source of Funds",
                                                            "value": "c",
                                                            "shortcut": ""
                                                        }
                                                    ],
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "optionsJs",
                                                    "type": "radio",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Length of Employment in Years",
                                                    "tableView": true,
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "serviceInYearsJs",
                                                    "type": "textfield",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Average Annual Salary during that time",
                                                    "optionsLabelPosition": "right",
                                                    "inline": false,
                                                    "tableView": false,
                                                    "values": [
                                                        {
                                                            "label": "£25,000 or under ",
                                                            "value": "a",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "£25,000 to £75,000 ",
                                                            "value": "b",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "£75,000 to £150,000 ",
                                                            "value": "c",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "Over £150,000 ",
                                                            "value": "d",
                                                            "shortcut": ""
                                                        }
                                                    ],
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "averageAnnualSalaryJs",
                                                    "type": "radio",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Please confirm the country location of your employment",
                                                    "widget": "choicesjs",
                                                    "description": "If you work remotely for a company, please insert the country of the company’s operations, not your location. For example, if a company operates in Guernsey, but employs someone working remotely in the UK, Guernsey should be entered.",
                                                    "uniqueOptions": true,
                                                    "tableView": true,
                                                    "multiple": true,
                                                    "dataSrc": "url",
                                                    "data": {
                                                        "url": "https://meshid.app/api/system/isocountries",
                                                        "headers": [
                                                            {
                                                                "key": "",
                                                                "value": ""
                                                            }
                                                        ]
                                                    },
                                                    "valueProperty": "label",
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "empCJs",
                                                    "type": "select",
                                                    "input": true,
                                                    "disableLimit": false
                                                }
                                            ]
                                        },
                                        {
                                            "legend": "<i class=\"fa-solid fa-chart-line\"></i> Investments",
                                            "key": "fieldSet27Js",
                                            "customConditional": "show = row.sofJs.b",
                                            "type": "fieldset",
                                            "label": "<i class=\"fa-solid fa-chart-line\"></i> Investments",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "Proof of investment from Joint Account Holder",
                                                    "calculateValue": "let res = false;\nconst docs = row.EDDdoc.additionalDocRequests;\nif (Array.isArray(docs)) {\n  docs.forEach((ele)=>{\n    if (ele.name == 'Proof of investment from Main Account Holder' || ele.name == 'Proof of investment from Joint Account Holder') {\n      res = true;\n    }\n  })\n}\nvalue = {}\n\nif(res){\n  value.type = \"Other\";\n  value.purposesOfUse = [\"ProofOfInvestmentFromJointAccountHolder\"];\n  value.fields = {\"Notes\": \"Please upload any of the following document types for the relevant account holder:\\n\\n- Statement of Account\\n- Statement of sale of investments\\n\\nIf you believe the uploaded document requires explanation, please provide that explanation in a word document also to be uploaded here.\"};\n  value.customEvidenceType = component.label;\n}\nelse{\n  value = ''\n}\n",
                                                    "key": "sofJsb",
                                                    "tags": [
                                                        "EVD"
                                                    ],
                                                    "type": "hidden",
                                                    "input": true,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "Is this option being selected for Source of Wealth or Source of Funds?",
                                                    "optionsLabelPosition": "right",
                                                    "inline": false,
                                                    "tableView": false,
                                                    "values": [
                                                        {
                                                            "label": "Source of Wealth",
                                                            "value": "a",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "Source of Funds",
                                                            "value": "b",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "Source of Wealth and Source of Funds",
                                                            "value": "c",
                                                            "shortcut": ""
                                                        }
                                                    ],
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "options1Js",
                                                    "type": "radio",
                                                    "input": true
                                                },
                                                {
                                                    "label": "How have you funded the investments?",
                                                    "tableView": true,
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "haveYouInvestmentsJs",
                                                    "type": "textfield",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Nature of Investment ",
                                                    "tableView": true,
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "natureOfInvestmentJs",
                                                    "type": "textfield",
                                                    "input": true
                                                },
                                                {
                                                    "customClass": "custom-droptext",
                                                    "key": "fieldSet50Js",
                                                    "type": "fieldset",
                                                    "label": "",
                                                    "input": false,
                                                    "tableView": false,
                                                    "components": [
                                                        {
                                                            "label": "Approximate value of portfolio",
                                                            "mask": false,
                                                            "tableView": false,
                                                            "delimiter": true,
                                                            "requireDecimal": false,
                                                            "inputFormat": "plain",
                                                            "validate": {
                                                                "required": true
                                                            },
                                                            "key": "invBJs",
                                                            "type": "number",
                                                            "input": true
                                                        },
                                                        {
                                                            "label": "Currency",
                                                            "widget": "choicesjs",
                                                            "hideLabel": true,
                                                            "tableView": true,
                                                            "dataSrc": "json",
                                                            "data": {
                                                                "json": {
                                                                    "AED": {
                                                                        "symbol": "AED",
                                                                        "name": "United Arab Emirates Dirham",
                                                                        "symbol_native": "د.إ.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "AED",
                                                                        "name_plural": "UAE dirhams"
                                                                    },
                                                                    "AFN": {
                                                                        "symbol": "Af",
                                                                        "name": "Afghan Afghani",
                                                                        "symbol_native": "؋",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "AFN",
                                                                        "name_plural": "Afghan Afghanis"
                                                                    },
                                                                    "ALL": {
                                                                        "symbol": "ALL",
                                                                        "name": "Albanian Lek",
                                                                        "symbol_native": "Lek",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "ALL",
                                                                        "name_plural": "Albanian lekë"
                                                                    },
                                                                    "AMD": {
                                                                        "symbol": "AMD",
                                                                        "name": "Armenian Dram",
                                                                        "symbol_native": "դր.",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "AMD",
                                                                        "name_plural": "Armenian drams"
                                                                    },
                                                                    "ARS": {
                                                                        "symbol": "AR$",
                                                                        "name": "Argentine Peso",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "ARS",
                                                                        "name_plural": "Argentine pesos"
                                                                    },
                                                                    "AUD": {
                                                                        "symbol": "AU$",
                                                                        "name": "Australian Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "AUD",
                                                                        "name_plural": "Australian dollars"
                                                                    },
                                                                    "AZN": {
                                                                        "symbol": "man.",
                                                                        "name": "Azerbaijani Manat",
                                                                        "symbol_native": "ман.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "AZN",
                                                                        "name_plural": "Azerbaijani manats"
                                                                    },
                                                                    "BAM": {
                                                                        "symbol": "KM",
                                                                        "name": "Bosnia-Herzegovina Convertible Mark",
                                                                        "symbol_native": "KM",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BAM",
                                                                        "name_plural": "Bosnia-Herzegovina convertible marks"
                                                                    },
                                                                    "BDT": {
                                                                        "symbol": "Tk",
                                                                        "name": "Bangladeshi Taka",
                                                                        "symbol_native": "৳",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BDT",
                                                                        "name_plural": "Bangladeshi takas"
                                                                    },
                                                                    "BGN": {
                                                                        "symbol": "BGN",
                                                                        "name": "Bulgarian Lev",
                                                                        "symbol_native": "лв.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BGN",
                                                                        "name_plural": "Bulgarian leva"
                                                                    },
                                                                    "BHD": {
                                                                        "symbol": "BD",
                                                                        "name": "Bahraini Dinar",
                                                                        "symbol_native": "د.ب.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "BHD",
                                                                        "name_plural": "Bahraini dinars"
                                                                    },
                                                                    "BIF": {
                                                                        "symbol": "FBu",
                                                                        "name": "Burundian Franc",
                                                                        "symbol_native": "FBu",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "BIF",
                                                                        "name_plural": "Burundian francs"
                                                                    },
                                                                    "BND": {
                                                                        "symbol": "BN$",
                                                                        "name": "Brunei Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BND",
                                                                        "name_plural": "Brunei dollars"
                                                                    },
                                                                    "BOB": {
                                                                        "symbol": "Bs",
                                                                        "name": "Bolivian Boliviano",
                                                                        "symbol_native": "Bs",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BOB",
                                                                        "name_plural": "Bolivian bolivianos"
                                                                    },
                                                                    "BRL": {
                                                                        "symbol": "R$",
                                                                        "name": "Brazilian Real",
                                                                        "symbol_native": "R$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BRL",
                                                                        "name_plural": "Brazilian reals"
                                                                    },
                                                                    "BWP": {
                                                                        "symbol": "BWP",
                                                                        "name": "Botswanan Pula",
                                                                        "symbol_native": "P",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BWP",
                                                                        "name_plural": "Botswanan pulas"
                                                                    },
                                                                    "BYN": {
                                                                        "symbol": "Br",
                                                                        "name": "Belarusian Ruble",
                                                                        "symbol_native": "руб.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BYN",
                                                                        "name_plural": "Belarusian rubles"
                                                                    },
                                                                    "BZD": {
                                                                        "symbol": "BZ$",
                                                                        "name": "Belize Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BZD",
                                                                        "name_plural": "Belize dollars"
                                                                    },
                                                                    "CAD": {
                                                                        "symbol": "CA$",
                                                                        "name": "Canadian Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "CAD",
                                                                        "name_plural": "Canadian dollars"
                                                                    },
                                                                    "CDF": {
                                                                        "symbol": "CDF",
                                                                        "name": "Congolese Franc",
                                                                        "symbol_native": "FrCD",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "CDF",
                                                                        "name_plural": "Congolese francs"
                                                                    },
                                                                    "CHF": {
                                                                        "symbol": "CHF",
                                                                        "name": "Swiss Franc",
                                                                        "symbol_native": "CHF",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0.05,
                                                                        "code": "CHF",
                                                                        "name_plural": "Swiss francs"
                                                                    },
                                                                    "CLP": {
                                                                        "symbol": "CL$",
                                                                        "name": "Chilean Peso",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "CLP",
                                                                        "name_plural": "Chilean pesos"
                                                                    },
                                                                    "CNY": {
                                                                        "symbol": "CN¥",
                                                                        "name": "Chinese Yuan",
                                                                        "symbol_native": "CN¥",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "CNY",
                                                                        "name_plural": "Chinese yuan"
                                                                    },
                                                                    "COP": {
                                                                        "symbol": "CO$",
                                                                        "name": "Colombian Peso",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "COP",
                                                                        "name_plural": "Colombian pesos"
                                                                    },
                                                                    "CRC": {
                                                                        "symbol": "₡",
                                                                        "name": "Costa Rican Colón",
                                                                        "symbol_native": "₡",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "CRC",
                                                                        "name_plural": "Costa Rican colóns"
                                                                    },
                                                                    "CVE": {
                                                                        "symbol": "CV$",
                                                                        "name": "Cape Verdean Escudo",
                                                                        "symbol_native": "CV$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "CVE",
                                                                        "name_plural": "Cape Verdean escudos"
                                                                    },
                                                                    "CZK": {
                                                                        "symbol": "Kč",
                                                                        "name": "Czech Republic Koruna",
                                                                        "symbol_native": "Kč",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "CZK",
                                                                        "name_plural": "Czech Republic korunas"
                                                                    },
                                                                    "DJF": {
                                                                        "symbol": "Fdj",
                                                                        "name": "Djiboutian Franc",
                                                                        "symbol_native": "Fdj",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "DJF",
                                                                        "name_plural": "Djiboutian francs"
                                                                    },
                                                                    "DKK": {
                                                                        "symbol": "Dkr",
                                                                        "name": "Danish Krone",
                                                                        "symbol_native": "kr",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "DKK",
                                                                        "name_plural": "Danish kroner"
                                                                    },
                                                                    "DOP": {
                                                                        "symbol": "RD$",
                                                                        "name": "Dominican Peso",
                                                                        "symbol_native": "RD$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "DOP",
                                                                        "name_plural": "Dominican pesos"
                                                                    },
                                                                    "DZD": {
                                                                        "symbol": "DA",
                                                                        "name": "Algerian Dinar",
                                                                        "symbol_native": "د.ج.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "DZD",
                                                                        "name_plural": "Algerian dinars"
                                                                    },
                                                                    "EUR": {
                                                                        "symbol": "€",
                                                                        "name": "Euro",
                                                                        "symbol_native": "€",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "EUR",
                                                                        "name_plural": "euros"
                                                                    },
                                                                    "EEK": {
                                                                        "symbol": "Ekr",
                                                                        "name": "Estonian Kroon",
                                                                        "symbol_native": "kr",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "EEK",
                                                                        "name_plural": "Estonian kroons"
                                                                    },
                                                                    "EGP": {
                                                                        "symbol": "EGP",
                                                                        "name": "Egyptian Pound",
                                                                        "symbol_native": "ج.م.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "EGP",
                                                                        "name_plural": "Egyptian pounds"
                                                                    },
                                                                    "ERN": {
                                                                        "symbol": "Nfk",
                                                                        "name": "Eritrean Nakfa",
                                                                        "symbol_native": "Nfk",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "ERN",
                                                                        "name_plural": "Eritrean nakfas"
                                                                    },
                                                                    "ETB": {
                                                                        "symbol": "Br",
                                                                        "name": "Ethiopian Birr",
                                                                        "symbol_native": "Br",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "ETB",
                                                                        "name_plural": "Ethiopian birrs"
                                                                    },
                                                                    "GBP": {
                                                                        "symbol": "£",
                                                                        "name": "British Pound Sterling",
                                                                        "symbol_native": "£",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "GBP",
                                                                        "name_plural": "British pounds sterling"
                                                                    },
                                                                    "GEL": {
                                                                        "symbol": "GEL",
                                                                        "name": "Georgian Lari",
                                                                        "symbol_native": "GEL",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "GEL",
                                                                        "name_plural": "Georgian laris"
                                                                    },
                                                                    "GHS": {
                                                                        "symbol": "GH₵",
                                                                        "name": "Ghanaian Cedi",
                                                                        "symbol_native": "GH₵",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "GHS",
                                                                        "name_plural": "Ghanaian cedis"
                                                                    },
                                                                    "GNF": {
                                                                        "symbol": "FG",
                                                                        "name": "Guinean Franc",
                                                                        "symbol_native": "FG",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "GNF",
                                                                        "name_plural": "Guinean francs"
                                                                    },
                                                                    "GTQ": {
                                                                        "symbol": "GTQ",
                                                                        "name": "Guatemalan Quetzal",
                                                                        "symbol_native": "Q",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "GTQ",
                                                                        "name_plural": "Guatemalan quetzals"
                                                                    },
                                                                    "HKD": {
                                                                        "symbol": "HK$",
                                                                        "name": "Hong Kong Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "HKD",
                                                                        "name_plural": "Hong Kong dollars"
                                                                    },
                                                                    "HNL": {
                                                                        "symbol": "HNL",
                                                                        "name": "Honduran Lempira",
                                                                        "symbol_native": "L",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "HNL",
                                                                        "name_plural": "Honduran lempiras"
                                                                    },
                                                                    "HRK": {
                                                                        "symbol": "kn",
                                                                        "name": "Croatian Kuna",
                                                                        "symbol_native": "kn",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "HRK",
                                                                        "name_plural": "Croatian kunas"
                                                                    },
                                                                    "HUF": {
                                                                        "symbol": "Ft",
                                                                        "name": "Hungarian Forint",
                                                                        "symbol_native": "Ft",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "HUF",
                                                                        "name_plural": "Hungarian forints"
                                                                    },
                                                                    "IDR": {
                                                                        "symbol": "Rp",
                                                                        "name": "Indonesian Rupiah",
                                                                        "symbol_native": "Rp",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "IDR",
                                                                        "name_plural": "Indonesian rupiahs"
                                                                    },
                                                                    "ILS": {
                                                                        "symbol": "₪",
                                                                        "name": "Israeli New Sheqel",
                                                                        "symbol_native": "₪",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "ILS",
                                                                        "name_plural": "Israeli new sheqels"
                                                                    },
                                                                    "INR": {
                                                                        "symbol": "Rs",
                                                                        "name": "Indian Rupee",
                                                                        "symbol_native": "₹",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "INR",
                                                                        "name_plural": "Indian rupees"
                                                                    },
                                                                    "IQD": {
                                                                        "symbol": "IQD",
                                                                        "name": "Iraqi Dinar",
                                                                        "symbol_native": "د.ع.‏",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "IQD",
                                                                        "name_plural": "Iraqi dinars"
                                                                    },
                                                                    "IRR": {
                                                                        "symbol": "IRR",
                                                                        "name": "Iranian Rial",
                                                                        "symbol_native": "﷼",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "IRR",
                                                                        "name_plural": "Iranian rials"
                                                                    },
                                                                    "ISK": {
                                                                        "symbol": "Ikr",
                                                                        "name": "Icelandic Króna",
                                                                        "symbol_native": "kr",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "ISK",
                                                                        "name_plural": "Icelandic krónur"
                                                                    },
                                                                    "JMD": {
                                                                        "symbol": "J$",
                                                                        "name": "Jamaican Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "JMD",
                                                                        "name_plural": "Jamaican dollars"
                                                                    },
                                                                    "JOD": {
                                                                        "symbol": "JD",
                                                                        "name": "Jordanian Dinar",
                                                                        "symbol_native": "د.أ.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "JOD",
                                                                        "name_plural": "Jordanian dinars"
                                                                    },
                                                                    "JPY": {
                                                                        "symbol": "¥",
                                                                        "name": "Japanese Yen",
                                                                        "symbol_native": "￥",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "JPY",
                                                                        "name_plural": "Japanese yen"
                                                                    },
                                                                    "KES": {
                                                                        "symbol": "Ksh",
                                                                        "name": "Kenyan Shilling",
                                                                        "symbol_native": "Ksh",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "KES",
                                                                        "name_plural": "Kenyan shillings"
                                                                    },
                                                                    "KHR": {
                                                                        "symbol": "KHR",
                                                                        "name": "Cambodian Riel",
                                                                        "symbol_native": "៛",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "KHR",
                                                                        "name_plural": "Cambodian riels"
                                                                    },
                                                                    "KMF": {
                                                                        "symbol": "CF",
                                                                        "name": "Comorian Franc",
                                                                        "symbol_native": "FC",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "KMF",
                                                                        "name_plural": "Comorian francs"
                                                                    },
                                                                    "KRW": {
                                                                        "symbol": "₩",
                                                                        "name": "South Korean Won",
                                                                        "symbol_native": "₩",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "KRW",
                                                                        "name_plural": "South Korean won"
                                                                    },
                                                                    "KWD": {
                                                                        "symbol": "KD",
                                                                        "name": "Kuwaiti Dinar",
                                                                        "symbol_native": "د.ك.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "KWD",
                                                                        "name_plural": "Kuwaiti dinars"
                                                                    },
                                                                    "KZT": {
                                                                        "symbol": "KZT",
                                                                        "name": "Kazakhstani Tenge",
                                                                        "symbol_native": "тңг.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "KZT",
                                                                        "name_plural": "Kazakhstani tenges"
                                                                    },
                                                                    "LBP": {
                                                                        "symbol": "LB£",
                                                                        "name": "Lebanese Pound",
                                                                        "symbol_native": "ل.ل.‏",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "LBP",
                                                                        "name_plural": "Lebanese pounds"
                                                                    },
                                                                    "LKR": {
                                                                        "symbol": "SLRs",
                                                                        "name": "Sri Lankan Rupee",
                                                                        "symbol_native": "SL Re",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "LKR",
                                                                        "name_plural": "Sri Lankan rupees"
                                                                    },
                                                                    "LTL": {
                                                                        "symbol": "Lt",
                                                                        "name": "Lithuanian Litas",
                                                                        "symbol_native": "Lt",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "LTL",
                                                                        "name_plural": "Lithuanian litai"
                                                                    },
                                                                    "LVL": {
                                                                        "symbol": "Ls",
                                                                        "name": "Latvian Lats",
                                                                        "symbol_native": "Ls",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "LVL",
                                                                        "name_plural": "Latvian lati"
                                                                    },
                                                                    "LYD": {
                                                                        "symbol": "LD",
                                                                        "name": "Libyan Dinar",
                                                                        "symbol_native": "د.ل.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "LYD",
                                                                        "name_plural": "Libyan dinars"
                                                                    },
                                                                    "MAD": {
                                                                        "symbol": "MAD",
                                                                        "name": "Moroccan Dirham",
                                                                        "symbol_native": "د.م.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MAD",
                                                                        "name_plural": "Moroccan dirhams"
                                                                    },
                                                                    "MDL": {
                                                                        "symbol": "MDL",
                                                                        "name": "Moldovan Leu",
                                                                        "symbol_native": "MDL",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MDL",
                                                                        "name_plural": "Moldovan lei"
                                                                    },
                                                                    "MGA": {
                                                                        "symbol": "MGA",
                                                                        "name": "Malagasy Ariary",
                                                                        "symbol_native": "MGA",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "MGA",
                                                                        "name_plural": "Malagasy Ariaries"
                                                                    },
                                                                    "MKD": {
                                                                        "symbol": "MKD",
                                                                        "name": "Macedonian Denar",
                                                                        "symbol_native": "MKD",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MKD",
                                                                        "name_plural": "Macedonian denari"
                                                                    },
                                                                    "MMK": {
                                                                        "symbol": "MMK",
                                                                        "name": "Myanma Kyat",
                                                                        "symbol_native": "K",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "MMK",
                                                                        "name_plural": "Myanma kyats"
                                                                    },
                                                                    "MOP": {
                                                                        "symbol": "MOP$",
                                                                        "name": "Macanese Pataca",
                                                                        "symbol_native": "MOP$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MOP",
                                                                        "name_plural": "Macanese patacas"
                                                                    },
                                                                    "MUR": {
                                                                        "symbol": "MURs",
                                                                        "name": "Mauritian Rupee",
                                                                        "symbol_native": "MURs",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "MUR",
                                                                        "name_plural": "Mauritian rupees"
                                                                    },
                                                                    "MXN": {
                                                                        "symbol": "MX$",
                                                                        "name": "Mexican Peso",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MXN",
                                                                        "name_plural": "Mexican pesos"
                                                                    },
                                                                    "MYR": {
                                                                        "symbol": "RM",
                                                                        "name": "Malaysian Ringgit",
                                                                        "symbol_native": "RM",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MYR",
                                                                        "name_plural": "Malaysian ringgits"
                                                                    },
                                                                    "MZN": {
                                                                        "symbol": "MTn",
                                                                        "name": "Mozambican Metical",
                                                                        "symbol_native": "MTn",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MZN",
                                                                        "name_plural": "Mozambican meticals"
                                                                    },
                                                                    "NAD": {
                                                                        "symbol": "N$",
                                                                        "name": "Namibian Dollar",
                                                                        "symbol_native": "N$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NAD",
                                                                        "name_plural": "Namibian dollars"
                                                                    },
                                                                    "NGN": {
                                                                        "symbol": "₦",
                                                                        "name": "Nigerian Naira",
                                                                        "symbol_native": "₦",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NGN",
                                                                        "name_plural": "Nigerian nairas"
                                                                    },
                                                                    "NIO": {
                                                                        "symbol": "C$",
                                                                        "name": "Nicaraguan Córdoba",
                                                                        "symbol_native": "C$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NIO",
                                                                        "name_plural": "Nicaraguan córdobas"
                                                                    },
                                                                    "NOK": {
                                                                        "symbol": "Nkr",
                                                                        "name": "Norwegian Krone",
                                                                        "symbol_native": "kr",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NOK",
                                                                        "name_plural": "Norwegian kroner"
                                                                    },
                                                                    "NPR": {
                                                                        "symbol": "NPRs",
                                                                        "name": "Nepalese Rupee",
                                                                        "symbol_native": "नेरू",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NPR",
                                                                        "name_plural": "Nepalese rupees"
                                                                    },
                                                                    "NZD": {
                                                                        "symbol": "NZ$",
                                                                        "name": "New Zealand Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NZD",
                                                                        "name_plural": "New Zealand dollars"
                                                                    },
                                                                    "OMR": {
                                                                        "symbol": "OMR",
                                                                        "name": "Omani Rial",
                                                                        "symbol_native": "ر.ع.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "OMR",
                                                                        "name_plural": "Omani rials"
                                                                    },
                                                                    "PAB": {
                                                                        "symbol": "B/.",
                                                                        "name": "Panamanian Balboa",
                                                                        "symbol_native": "B/.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "PAB",
                                                                        "name_plural": "Panamanian balboas"
                                                                    },
                                                                    "PEN": {
                                                                        "symbol": "S/.",
                                                                        "name": "Peruvian Nuevo Sol",
                                                                        "symbol_native": "S/.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "PEN",
                                                                        "name_plural": "Peruvian nuevos soles"
                                                                    },
                                                                    "PHP": {
                                                                        "symbol": "₱",
                                                                        "name": "Philippine Peso",
                                                                        "symbol_native": "₱",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "PHP",
                                                                        "name_plural": "Philippine pesos"
                                                                    },
                                                                    "PKR": {
                                                                        "symbol": "PKRs",
                                                                        "name": "Pakistani Rupee",
                                                                        "symbol_native": "₨",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "PKR",
                                                                        "name_plural": "Pakistani rupees"
                                                                    },
                                                                    "PLN": {
                                                                        "symbol": "zł",
                                                                        "name": "Polish Zloty",
                                                                        "symbol_native": "zł",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "PLN",
                                                                        "name_plural": "Polish zlotys"
                                                                    },
                                                                    "PYG": {
                                                                        "symbol": "₲",
                                                                        "name": "Paraguayan Guarani",
                                                                        "symbol_native": "₲",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "PYG",
                                                                        "name_plural": "Paraguayan guaranis"
                                                                    },
                                                                    "QAR": {
                                                                        "symbol": "QR",
                                                                        "name": "Qatari Rial",
                                                                        "symbol_native": "ر.ق.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "QAR",
                                                                        "name_plural": "Qatari rials"
                                                                    },
                                                                    "RON": {
                                                                        "symbol": "RON",
                                                                        "name": "Romanian Leu",
                                                                        "symbol_native": "RON",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "RON",
                                                                        "name_plural": "Romanian lei"
                                                                    },
                                                                    "RSD": {
                                                                        "symbol": "din.",
                                                                        "name": "Serbian Dinar",
                                                                        "symbol_native": "дин.",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "RSD",
                                                                        "name_plural": "Serbian dinars"
                                                                    },
                                                                    "RUB": {
                                                                        "symbol": "RUB",
                                                                        "name": "Russian Ruble",
                                                                        "symbol_native": "₽.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "RUB",
                                                                        "name_plural": "Russian rubles"
                                                                    },
                                                                    "RWF": {
                                                                        "symbol": "RWF",
                                                                        "name": "Rwandan Franc",
                                                                        "symbol_native": "FR",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "RWF",
                                                                        "name_plural": "Rwandan francs"
                                                                    },
                                                                    "SAR": {
                                                                        "symbol": "SR",
                                                                        "name": "Saudi Riyal",
                                                                        "symbol_native": "ر.س.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "SAR",
                                                                        "name_plural": "Saudi riyals"
                                                                    },
                                                                    "SDG": {
                                                                        "symbol": "SDG",
                                                                        "name": "Sudanese Pound",
                                                                        "symbol_native": "SDG",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "SDG",
                                                                        "name_plural": "Sudanese pounds"
                                                                    },
                                                                    "SEK": {
                                                                        "symbol": "Skr",
                                                                        "name": "Swedish Krona",
                                                                        "symbol_native": "kr",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "SEK",
                                                                        "name_plural": "Swedish kronor"
                                                                    },
                                                                    "SGD": {
                                                                        "symbol": "S$",
                                                                        "name": "Singapore Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "SGD",
                                                                        "name_plural": "Singapore dollars"
                                                                    },
                                                                    "SOS": {
                                                                        "symbol": "Ssh",
                                                                        "name": "Somali Shilling",
                                                                        "symbol_native": "Ssh",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "SOS",
                                                                        "name_plural": "Somali shillings"
                                                                    },
                                                                    "SYP": {
                                                                        "symbol": "SY£",
                                                                        "name": "Syrian Pound",
                                                                        "symbol_native": "ل.س.‏",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "SYP",
                                                                        "name_plural": "Syrian pounds"
                                                                    },
                                                                    "THB": {
                                                                        "symbol": "฿",
                                                                        "name": "Thai Baht",
                                                                        "symbol_native": "฿",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "THB",
                                                                        "name_plural": "Thai baht"
                                                                    },
                                                                    "TND": {
                                                                        "symbol": "DT",
                                                                        "name": "Tunisian Dinar",
                                                                        "symbol_native": "د.ت.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "TND",
                                                                        "name_plural": "Tunisian dinars"
                                                                    },
                                                                    "TOP": {
                                                                        "symbol": "T$",
                                                                        "name": "Tongan Paʻanga",
                                                                        "symbol_native": "T$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "TOP",
                                                                        "name_plural": "Tongan paʻanga"
                                                                    },
                                                                    "TRY": {
                                                                        "symbol": "TL",
                                                                        "name": "Turkish Lira",
                                                                        "symbol_native": "TL",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "TRY",
                                                                        "name_plural": "Turkish Lira"
                                                                    },
                                                                    "TTD": {
                                                                        "symbol": "TT$",
                                                                        "name": "Trinidad and Tobago Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "TTD",
                                                                        "name_plural": "Trinidad and Tobago dollars"
                                                                    },
                                                                    "TWD": {
                                                                        "symbol": "NT$",
                                                                        "name": "New Taiwan Dollar",
                                                                        "symbol_native": "NT$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "TWD",
                                                                        "name_plural": "New Taiwan dollars"
                                                                    },
                                                                    "TZS": {
                                                                        "symbol": "TSh",
                                                                        "name": "Tanzanian Shilling",
                                                                        "symbol_native": "TSh",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "TZS",
                                                                        "name_plural": "Tanzanian shillings"
                                                                    },
                                                                    "UAH": {
                                                                        "symbol": "₴",
                                                                        "name": "Ukrainian Hryvnia",
                                                                        "symbol_native": "₴",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "UAH",
                                                                        "name_plural": "Ukrainian hryvnias"
                                                                    },
                                                                    "USD": {
                                                                        "symbol": "$",
                                                                        "name": "US Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "USD",
                                                                        "name_plural": "US dollars"
                                                                    },
                                                                    "UGX": {
                                                                        "symbol": "USh",
                                                                        "name": "Ugandan Shilling",
                                                                        "symbol_native": "USh",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "UGX",
                                                                        "name_plural": "Ugandan shillings"
                                                                    },
                                                                    "UYU": {
                                                                        "symbol": "$U",
                                                                        "name": "Uruguayan Peso",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "UYU",
                                                                        "name_plural": "Uruguayan pesos"
                                                                    },
                                                                    "UZS": {
                                                                        "symbol": "UZS",
                                                                        "name": "Uzbekistan Som",
                                                                        "symbol_native": "UZS",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "UZS",
                                                                        "name_plural": "Uzbekistan som"
                                                                    },
                                                                    "VEF": {
                                                                        "symbol": "Bs.F.",
                                                                        "name": "Venezuelan Bolívar",
                                                                        "symbol_native": "Bs.F.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "VEF",
                                                                        "name_plural": "Venezuelan bolívars"
                                                                    },
                                                                    "VND": {
                                                                        "symbol": "₫",
                                                                        "name": "Vietnamese Dong",
                                                                        "symbol_native": "₫",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "VND",
                                                                        "name_plural": "Vietnamese dong"
                                                                    },
                                                                    "XAF": {
                                                                        "symbol": "FCFA",
                                                                        "name": "CFA Franc BEAC",
                                                                        "symbol_native": "FCFA",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "XAF",
                                                                        "name_plural": "CFA francs BEAC"
                                                                    },
                                                                    "XOF": {
                                                                        "symbol": "CFA",
                                                                        "name": "CFA Franc BCEAO",
                                                                        "symbol_native": "CFA",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "XOF",
                                                                        "name_plural": "CFA francs BCEAO"
                                                                    },
                                                                    "YER": {
                                                                        "symbol": "YR",
                                                                        "name": "Yemeni Rial",
                                                                        "symbol_native": "ر.ي.‏",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "YER",
                                                                        "name_plural": "Yemeni rials"
                                                                    },
                                                                    "ZAR": {
                                                                        "symbol": "R",
                                                                        "name": "South African Rand",
                                                                        "symbol_native": "R",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "ZAR",
                                                                        "name_plural": "South African rand"
                                                                    },
                                                                    "ZMK": {
                                                                        "symbol": "ZK",
                                                                        "name": "Zambian Kwacha",
                                                                        "symbol_native": "ZK",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "ZMK",
                                                                        "name_plural": "Zambian kwachas"
                                                                    },
                                                                    "ZWL": {
                                                                        "symbol": "ZWL$",
                                                                        "name": "Zimbabwean Dollar",
                                                                        "symbol_native": "ZWL$",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "ZWL",
                                                                        "name_plural": "Zimbabwean Dollar"
                                                                    }
                                                                }
                                                            },
                                                            "template": "<span> {{ item.name }} {{ item.code }} </span>\n",
                                                            "customDefaultValue": "value = {\n    \"symbol\": \"$\",\n    \"name\": \"US Dollar\",\n    \"symbol_native\": \"$\",\n    \"decimal_digits\": 2,\n    \"rounding\": 0,\n    \"code\": \"USD\",\n    \"name_plural\": \"US dollars\"\n  }",
                                                            "validate": {
                                                                "required": true
                                                            },
                                                            "validateWhenHidden": false,
                                                            "key": "invCJs",
                                                            "type": "select",
                                                            "input": true
                                                        },
                                                        {
                                                            "label": "Amount",
                                                            "calculateValue": "if(row.invBJs){\nvalue= row.invCJs.symbol + ' ' + row.invBJs.toLocaleString() \n}",
                                                            "key": "invDJs",
                                                            "type": "hidden",
                                                            "input": true,
                                                            "tableView": false
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "Please briefly provide an overview of your investment portfolio",
                                                    "autoExpand": false,
                                                    "tableView": true,
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "invAJs",
                                                    "type": "textarea",
                                                    "input": true
                                                }
                                            ]
                                        },
                                        {
                                            "legend": "<i class=\"fa-solid fa-hand-holding-dollar\"></i> Gift /Inheritance",
                                            "key": "fieldSet29Js",
                                            "customConditional": "show = row.sofJs.c",
                                            "type": "fieldset",
                                            "label": "<i class=\"fa-solid fa-hand-holding-dollar\"></i> Gift /Inheritance",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "Proof of Gift/Inheritance from Joint Account Holder",
                                                    "calculateValue": "let res = false;\nconst docs = row.EDDdoc.additionalDocRequests;\n\nif (Array.isArray(docs)) {\n  docs.forEach((ele)=>{\n    if (ele.name == 'Proof of Gift/Inheritance from Main Account Holder' || ele.name == 'Proof of Gift/Inheritance from Joint Account Holder') res = true;\n  })\n}\nvalue = {}\n\nif(res){\n  value.type = \"Other\";\n  value.purposesOfUse = [\"ProofOfGiftInheritanceFromJointAccountHolder\"];\n  value.fields = {\"Notes\": \"Please upload any of the following document types for the relevant account holder:\\n\\n- Will with the details of the estate inherited\\n- Grant of probate\\n- Written confirmation of inheritance signed by an advocate or solicitor\\n\\nIf you believe the uploaded document requires explanation, please provide that explanation in a word document also to be uploaded here.\"};\n  value.customEvidenceType = component.label;\n}\nelse{\n  value = ''\n}\n",
                                                    "key": "sofJsc",
                                                    "tags": [
                                                        "EVD"
                                                    ],
                                                    "type": "hidden",
                                                    "input": true,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "Is this option being selected for Source of Wealth or Source of Funds?",
                                                    "optionsLabelPosition": "right",
                                                    "inline": false,
                                                    "tableView": false,
                                                    "values": [
                                                        {
                                                            "label": "Source of Wealth",
                                                            "value": "a",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "Source of Funds",
                                                            "value": "b",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "Source of Wealth and Source of Funds",
                                                            "value": "c",
                                                            "shortcut": ""
                                                        }
                                                    ],
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "options2Js",
                                                    "type": "radio",
                                                    "input": true
                                                },
                                                {
                                                    "label": "Please briefly describe the source of your inheritance or gift",
                                                    "autoExpand": false,
                                                    "tableView": true,
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "giftAJs",
                                                    "type": "textarea",
                                                    "input": true
                                                },
                                                {
                                                    "customClass": "custom-droptext",
                                                    "key": "fieldSet54Js",
                                                    "type": "fieldset",
                                                    "label": "",
                                                    "input": false,
                                                    "tableView": false,
                                                    "components": [
                                                        {
                                                            "label": "Inherited or gifted amount",
                                                            "mask": false,
                                                            "tableView": false,
                                                            "delimiter": true,
                                                            "requireDecimal": false,
                                                            "inputFormat": "plain",
                                                            "validate": {
                                                                "required": true
                                                            },
                                                            "key": "giftBJs",
                                                            "type": "number",
                                                            "input": true
                                                        },
                                                        {
                                                            "label": "Currency",
                                                            "widget": "choicesjs",
                                                            "hideLabel": true,
                                                            "tableView": true,
                                                            "dataSrc": "json",
                                                            "data": {
                                                                "json": {
                                                                    "AED": {
                                                                        "symbol": "AED",
                                                                        "name": "United Arab Emirates Dirham",
                                                                        "symbol_native": "د.إ.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "AED",
                                                                        "name_plural": "UAE dirhams"
                                                                    },
                                                                    "AFN": {
                                                                        "symbol": "Af",
                                                                        "name": "Afghan Afghani",
                                                                        "symbol_native": "؋",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "AFN",
                                                                        "name_plural": "Afghan Afghanis"
                                                                    },
                                                                    "ALL": {
                                                                        "symbol": "ALL",
                                                                        "name": "Albanian Lek",
                                                                        "symbol_native": "Lek",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "ALL",
                                                                        "name_plural": "Albanian lekë"
                                                                    },
                                                                    "AMD": {
                                                                        "symbol": "AMD",
                                                                        "name": "Armenian Dram",
                                                                        "symbol_native": "դր.",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "AMD",
                                                                        "name_plural": "Armenian drams"
                                                                    },
                                                                    "ARS": {
                                                                        "symbol": "AR$",
                                                                        "name": "Argentine Peso",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "ARS",
                                                                        "name_plural": "Argentine pesos"
                                                                    },
                                                                    "AUD": {
                                                                        "symbol": "AU$",
                                                                        "name": "Australian Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "AUD",
                                                                        "name_plural": "Australian dollars"
                                                                    },
                                                                    "AZN": {
                                                                        "symbol": "man.",
                                                                        "name": "Azerbaijani Manat",
                                                                        "symbol_native": "ман.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "AZN",
                                                                        "name_plural": "Azerbaijani manats"
                                                                    },
                                                                    "BAM": {
                                                                        "symbol": "KM",
                                                                        "name": "Bosnia-Herzegovina Convertible Mark",
                                                                        "symbol_native": "KM",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BAM",
                                                                        "name_plural": "Bosnia-Herzegovina convertible marks"
                                                                    },
                                                                    "BDT": {
                                                                        "symbol": "Tk",
                                                                        "name": "Bangladeshi Taka",
                                                                        "symbol_native": "৳",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BDT",
                                                                        "name_plural": "Bangladeshi takas"
                                                                    },
                                                                    "BGN": {
                                                                        "symbol": "BGN",
                                                                        "name": "Bulgarian Lev",
                                                                        "symbol_native": "лв.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BGN",
                                                                        "name_plural": "Bulgarian leva"
                                                                    },
                                                                    "BHD": {
                                                                        "symbol": "BD",
                                                                        "name": "Bahraini Dinar",
                                                                        "symbol_native": "د.ب.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "BHD",
                                                                        "name_plural": "Bahraini dinars"
                                                                    },
                                                                    "BIF": {
                                                                        "symbol": "FBu",
                                                                        "name": "Burundian Franc",
                                                                        "symbol_native": "FBu",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "BIF",
                                                                        "name_plural": "Burundian francs"
                                                                    },
                                                                    "BND": {
                                                                        "symbol": "BN$",
                                                                        "name": "Brunei Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BND",
                                                                        "name_plural": "Brunei dollars"
                                                                    },
                                                                    "BOB": {
                                                                        "symbol": "Bs",
                                                                        "name": "Bolivian Boliviano",
                                                                        "symbol_native": "Bs",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BOB",
                                                                        "name_plural": "Bolivian bolivianos"
                                                                    },
                                                                    "BRL": {
                                                                        "symbol": "R$",
                                                                        "name": "Brazilian Real",
                                                                        "symbol_native": "R$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BRL",
                                                                        "name_plural": "Brazilian reals"
                                                                    },
                                                                    "BWP": {
                                                                        "symbol": "BWP",
                                                                        "name": "Botswanan Pula",
                                                                        "symbol_native": "P",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BWP",
                                                                        "name_plural": "Botswanan pulas"
                                                                    },
                                                                    "BYN": {
                                                                        "symbol": "Br",
                                                                        "name": "Belarusian Ruble",
                                                                        "symbol_native": "руб.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BYN",
                                                                        "name_plural": "Belarusian rubles"
                                                                    },
                                                                    "BZD": {
                                                                        "symbol": "BZ$",
                                                                        "name": "Belize Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BZD",
                                                                        "name_plural": "Belize dollars"
                                                                    },
                                                                    "CAD": {
                                                                        "symbol": "CA$",
                                                                        "name": "Canadian Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "CAD",
                                                                        "name_plural": "Canadian dollars"
                                                                    },
                                                                    "CDF": {
                                                                        "symbol": "CDF",
                                                                        "name": "Congolese Franc",
                                                                        "symbol_native": "FrCD",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "CDF",
                                                                        "name_plural": "Congolese francs"
                                                                    },
                                                                    "CHF": {
                                                                        "symbol": "CHF",
                                                                        "name": "Swiss Franc",
                                                                        "symbol_native": "CHF",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0.05,
                                                                        "code": "CHF",
                                                                        "name_plural": "Swiss francs"
                                                                    },
                                                                    "CLP": {
                                                                        "symbol": "CL$",
                                                                        "name": "Chilean Peso",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "CLP",
                                                                        "name_plural": "Chilean pesos"
                                                                    },
                                                                    "CNY": {
                                                                        "symbol": "CN¥",
                                                                        "name": "Chinese Yuan",
                                                                        "symbol_native": "CN¥",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "CNY",
                                                                        "name_plural": "Chinese yuan"
                                                                    },
                                                                    "COP": {
                                                                        "symbol": "CO$",
                                                                        "name": "Colombian Peso",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "COP",
                                                                        "name_plural": "Colombian pesos"
                                                                    },
                                                                    "CRC": {
                                                                        "symbol": "₡",
                                                                        "name": "Costa Rican Colón",
                                                                        "symbol_native": "₡",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "CRC",
                                                                        "name_plural": "Costa Rican colóns"
                                                                    },
                                                                    "CVE": {
                                                                        "symbol": "CV$",
                                                                        "name": "Cape Verdean Escudo",
                                                                        "symbol_native": "CV$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "CVE",
                                                                        "name_plural": "Cape Verdean escudos"
                                                                    },
                                                                    "CZK": {
                                                                        "symbol": "Kč",
                                                                        "name": "Czech Republic Koruna",
                                                                        "symbol_native": "Kč",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "CZK",
                                                                        "name_plural": "Czech Republic korunas"
                                                                    },
                                                                    "DJF": {
                                                                        "symbol": "Fdj",
                                                                        "name": "Djiboutian Franc",
                                                                        "symbol_native": "Fdj",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "DJF",
                                                                        "name_plural": "Djiboutian francs"
                                                                    },
                                                                    "DKK": {
                                                                        "symbol": "Dkr",
                                                                        "name": "Danish Krone",
                                                                        "symbol_native": "kr",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "DKK",
                                                                        "name_plural": "Danish kroner"
                                                                    },
                                                                    "DOP": {
                                                                        "symbol": "RD$",
                                                                        "name": "Dominican Peso",
                                                                        "symbol_native": "RD$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "DOP",
                                                                        "name_plural": "Dominican pesos"
                                                                    },
                                                                    "DZD": {
                                                                        "symbol": "DA",
                                                                        "name": "Algerian Dinar",
                                                                        "symbol_native": "د.ج.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "DZD",
                                                                        "name_plural": "Algerian dinars"
                                                                    },
                                                                    "EUR": {
                                                                        "symbol": "€",
                                                                        "name": "Euro",
                                                                        "symbol_native": "€",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "EUR",
                                                                        "name_plural": "euros"
                                                                    },
                                                                    "EEK": {
                                                                        "symbol": "Ekr",
                                                                        "name": "Estonian Kroon",
                                                                        "symbol_native": "kr",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "EEK",
                                                                        "name_plural": "Estonian kroons"
                                                                    },
                                                                    "EGP": {
                                                                        "symbol": "EGP",
                                                                        "name": "Egyptian Pound",
                                                                        "symbol_native": "ج.م.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "EGP",
                                                                        "name_plural": "Egyptian pounds"
                                                                    },
                                                                    "ERN": {
                                                                        "symbol": "Nfk",
                                                                        "name": "Eritrean Nakfa",
                                                                        "symbol_native": "Nfk",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "ERN",
                                                                        "name_plural": "Eritrean nakfas"
                                                                    },
                                                                    "ETB": {
                                                                        "symbol": "Br",
                                                                        "name": "Ethiopian Birr",
                                                                        "symbol_native": "Br",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "ETB",
                                                                        "name_plural": "Ethiopian birrs"
                                                                    },
                                                                    "GBP": {
                                                                        "symbol": "£",
                                                                        "name": "British Pound Sterling",
                                                                        "symbol_native": "£",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "GBP",
                                                                        "name_plural": "British pounds sterling"
                                                                    },
                                                                    "GEL": {
                                                                        "symbol": "GEL",
                                                                        "name": "Georgian Lari",
                                                                        "symbol_native": "GEL",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "GEL",
                                                                        "name_plural": "Georgian laris"
                                                                    },
                                                                    "GHS": {
                                                                        "symbol": "GH₵",
                                                                        "name": "Ghanaian Cedi",
                                                                        "symbol_native": "GH₵",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "GHS",
                                                                        "name_plural": "Ghanaian cedis"
                                                                    },
                                                                    "GNF": {
                                                                        "symbol": "FG",
                                                                        "name": "Guinean Franc",
                                                                        "symbol_native": "FG",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "GNF",
                                                                        "name_plural": "Guinean francs"
                                                                    },
                                                                    "GTQ": {
                                                                        "symbol": "GTQ",
                                                                        "name": "Guatemalan Quetzal",
                                                                        "symbol_native": "Q",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "GTQ",
                                                                        "name_plural": "Guatemalan quetzals"
                                                                    },
                                                                    "HKD": {
                                                                        "symbol": "HK$",
                                                                        "name": "Hong Kong Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "HKD",
                                                                        "name_plural": "Hong Kong dollars"
                                                                    },
                                                                    "HNL": {
                                                                        "symbol": "HNL",
                                                                        "name": "Honduran Lempira",
                                                                        "symbol_native": "L",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "HNL",
                                                                        "name_plural": "Honduran lempiras"
                                                                    },
                                                                    "HRK": {
                                                                        "symbol": "kn",
                                                                        "name": "Croatian Kuna",
                                                                        "symbol_native": "kn",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "HRK",
                                                                        "name_plural": "Croatian kunas"
                                                                    },
                                                                    "HUF": {
                                                                        "symbol": "Ft",
                                                                        "name": "Hungarian Forint",
                                                                        "symbol_native": "Ft",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "HUF",
                                                                        "name_plural": "Hungarian forints"
                                                                    },
                                                                    "IDR": {
                                                                        "symbol": "Rp",
                                                                        "name": "Indonesian Rupiah",
                                                                        "symbol_native": "Rp",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "IDR",
                                                                        "name_plural": "Indonesian rupiahs"
                                                                    },
                                                                    "ILS": {
                                                                        "symbol": "₪",
                                                                        "name": "Israeli New Sheqel",
                                                                        "symbol_native": "₪",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "ILS",
                                                                        "name_plural": "Israeli new sheqels"
                                                                    },
                                                                    "INR": {
                                                                        "symbol": "Rs",
                                                                        "name": "Indian Rupee",
                                                                        "symbol_native": "₹",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "INR",
                                                                        "name_plural": "Indian rupees"
                                                                    },
                                                                    "IQD": {
                                                                        "symbol": "IQD",
                                                                        "name": "Iraqi Dinar",
                                                                        "symbol_native": "د.ع.‏",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "IQD",
                                                                        "name_plural": "Iraqi dinars"
                                                                    },
                                                                    "IRR": {
                                                                        "symbol": "IRR",
                                                                        "name": "Iranian Rial",
                                                                        "symbol_native": "﷼",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "IRR",
                                                                        "name_plural": "Iranian rials"
                                                                    },
                                                                    "ISK": {
                                                                        "symbol": "Ikr",
                                                                        "name": "Icelandic Króna",
                                                                        "symbol_native": "kr",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "ISK",
                                                                        "name_plural": "Icelandic krónur"
                                                                    },
                                                                    "JMD": {
                                                                        "symbol": "J$",
                                                                        "name": "Jamaican Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "JMD",
                                                                        "name_plural": "Jamaican dollars"
                                                                    },
                                                                    "JOD": {
                                                                        "symbol": "JD",
                                                                        "name": "Jordanian Dinar",
                                                                        "symbol_native": "د.أ.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "JOD",
                                                                        "name_plural": "Jordanian dinars"
                                                                    },
                                                                    "JPY": {
                                                                        "symbol": "¥",
                                                                        "name": "Japanese Yen",
                                                                        "symbol_native": "￥",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "JPY",
                                                                        "name_plural": "Japanese yen"
                                                                    },
                                                                    "KES": {
                                                                        "symbol": "Ksh",
                                                                        "name": "Kenyan Shilling",
                                                                        "symbol_native": "Ksh",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "KES",
                                                                        "name_plural": "Kenyan shillings"
                                                                    },
                                                                    "KHR": {
                                                                        "symbol": "KHR",
                                                                        "name": "Cambodian Riel",
                                                                        "symbol_native": "៛",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "KHR",
                                                                        "name_plural": "Cambodian riels"
                                                                    },
                                                                    "KMF": {
                                                                        "symbol": "CF",
                                                                        "name": "Comorian Franc",
                                                                        "symbol_native": "FC",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "KMF",
                                                                        "name_plural": "Comorian francs"
                                                                    },
                                                                    "KRW": {
                                                                        "symbol": "₩",
                                                                        "name": "South Korean Won",
                                                                        "symbol_native": "₩",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "KRW",
                                                                        "name_plural": "South Korean won"
                                                                    },
                                                                    "KWD": {
                                                                        "symbol": "KD",
                                                                        "name": "Kuwaiti Dinar",
                                                                        "symbol_native": "د.ك.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "KWD",
                                                                        "name_plural": "Kuwaiti dinars"
                                                                    },
                                                                    "KZT": {
                                                                        "symbol": "KZT",
                                                                        "name": "Kazakhstani Tenge",
                                                                        "symbol_native": "тңг.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "KZT",
                                                                        "name_plural": "Kazakhstani tenges"
                                                                    },
                                                                    "LBP": {
                                                                        "symbol": "LB£",
                                                                        "name": "Lebanese Pound",
                                                                        "symbol_native": "ل.ل.‏",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "LBP",
                                                                        "name_plural": "Lebanese pounds"
                                                                    },
                                                                    "LKR": {
                                                                        "symbol": "SLRs",
                                                                        "name": "Sri Lankan Rupee",
                                                                        "symbol_native": "SL Re",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "LKR",
                                                                        "name_plural": "Sri Lankan rupees"
                                                                    },
                                                                    "LTL": {
                                                                        "symbol": "Lt",
                                                                        "name": "Lithuanian Litas",
                                                                        "symbol_native": "Lt",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "LTL",
                                                                        "name_plural": "Lithuanian litai"
                                                                    },
                                                                    "LVL": {
                                                                        "symbol": "Ls",
                                                                        "name": "Latvian Lats",
                                                                        "symbol_native": "Ls",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "LVL",
                                                                        "name_plural": "Latvian lati"
                                                                    },
                                                                    "LYD": {
                                                                        "symbol": "LD",
                                                                        "name": "Libyan Dinar",
                                                                        "symbol_native": "د.ل.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "LYD",
                                                                        "name_plural": "Libyan dinars"
                                                                    },
                                                                    "MAD": {
                                                                        "symbol": "MAD",
                                                                        "name": "Moroccan Dirham",
                                                                        "symbol_native": "د.م.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MAD",
                                                                        "name_plural": "Moroccan dirhams"
                                                                    },
                                                                    "MDL": {
                                                                        "symbol": "MDL",
                                                                        "name": "Moldovan Leu",
                                                                        "symbol_native": "MDL",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MDL",
                                                                        "name_plural": "Moldovan lei"
                                                                    },
                                                                    "MGA": {
                                                                        "symbol": "MGA",
                                                                        "name": "Malagasy Ariary",
                                                                        "symbol_native": "MGA",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "MGA",
                                                                        "name_plural": "Malagasy Ariaries"
                                                                    },
                                                                    "MKD": {
                                                                        "symbol": "MKD",
                                                                        "name": "Macedonian Denar",
                                                                        "symbol_native": "MKD",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MKD",
                                                                        "name_plural": "Macedonian denari"
                                                                    },
                                                                    "MMK": {
                                                                        "symbol": "MMK",
                                                                        "name": "Myanma Kyat",
                                                                        "symbol_native": "K",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "MMK",
                                                                        "name_plural": "Myanma kyats"
                                                                    },
                                                                    "MOP": {
                                                                        "symbol": "MOP$",
                                                                        "name": "Macanese Pataca",
                                                                        "symbol_native": "MOP$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MOP",
                                                                        "name_plural": "Macanese patacas"
                                                                    },
                                                                    "MUR": {
                                                                        "symbol": "MURs",
                                                                        "name": "Mauritian Rupee",
                                                                        "symbol_native": "MURs",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "MUR",
                                                                        "name_plural": "Mauritian rupees"
                                                                    },
                                                                    "MXN": {
                                                                        "symbol": "MX$",
                                                                        "name": "Mexican Peso",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MXN",
                                                                        "name_plural": "Mexican pesos"
                                                                    },
                                                                    "MYR": {
                                                                        "symbol": "RM",
                                                                        "name": "Malaysian Ringgit",
                                                                        "symbol_native": "RM",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MYR",
                                                                        "name_plural": "Malaysian ringgits"
                                                                    },
                                                                    "MZN": {
                                                                        "symbol": "MTn",
                                                                        "name": "Mozambican Metical",
                                                                        "symbol_native": "MTn",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MZN",
                                                                        "name_plural": "Mozambican meticals"
                                                                    },
                                                                    "NAD": {
                                                                        "symbol": "N$",
                                                                        "name": "Namibian Dollar",
                                                                        "symbol_native": "N$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NAD",
                                                                        "name_plural": "Namibian dollars"
                                                                    },
                                                                    "NGN": {
                                                                        "symbol": "₦",
                                                                        "name": "Nigerian Naira",
                                                                        "symbol_native": "₦",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NGN",
                                                                        "name_plural": "Nigerian nairas"
                                                                    },
                                                                    "NIO": {
                                                                        "symbol": "C$",
                                                                        "name": "Nicaraguan Córdoba",
                                                                        "symbol_native": "C$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NIO",
                                                                        "name_plural": "Nicaraguan córdobas"
                                                                    },
                                                                    "NOK": {
                                                                        "symbol": "Nkr",
                                                                        "name": "Norwegian Krone",
                                                                        "symbol_native": "kr",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NOK",
                                                                        "name_plural": "Norwegian kroner"
                                                                    },
                                                                    "NPR": {
                                                                        "symbol": "NPRs",
                                                                        "name": "Nepalese Rupee",
                                                                        "symbol_native": "नेरू",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NPR",
                                                                        "name_plural": "Nepalese rupees"
                                                                    },
                                                                    "NZD": {
                                                                        "symbol": "NZ$",
                                                                        "name": "New Zealand Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NZD",
                                                                        "name_plural": "New Zealand dollars"
                                                                    },
                                                                    "OMR": {
                                                                        "symbol": "OMR",
                                                                        "name": "Omani Rial",
                                                                        "symbol_native": "ر.ع.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "OMR",
                                                                        "name_plural": "Omani rials"
                                                                    },
                                                                    "PAB": {
                                                                        "symbol": "B/.",
                                                                        "name": "Panamanian Balboa",
                                                                        "symbol_native": "B/.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "PAB",
                                                                        "name_plural": "Panamanian balboas"
                                                                    },
                                                                    "PEN": {
                                                                        "symbol": "S/.",
                                                                        "name": "Peruvian Nuevo Sol",
                                                                        "symbol_native": "S/.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "PEN",
                                                                        "name_plural": "Peruvian nuevos soles"
                                                                    },
                                                                    "PHP": {
                                                                        "symbol": "₱",
                                                                        "name": "Philippine Peso",
                                                                        "symbol_native": "₱",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "PHP",
                                                                        "name_plural": "Philippine pesos"
                                                                    },
                                                                    "PKR": {
                                                                        "symbol": "PKRs",
                                                                        "name": "Pakistani Rupee",
                                                                        "symbol_native": "₨",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "PKR",
                                                                        "name_plural": "Pakistani rupees"
                                                                    },
                                                                    "PLN": {
                                                                        "symbol": "zł",
                                                                        "name": "Polish Zloty",
                                                                        "symbol_native": "zł",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "PLN",
                                                                        "name_plural": "Polish zlotys"
                                                                    },
                                                                    "PYG": {
                                                                        "symbol": "₲",
                                                                        "name": "Paraguayan Guarani",
                                                                        "symbol_native": "₲",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "PYG",
                                                                        "name_plural": "Paraguayan guaranis"
                                                                    },
                                                                    "QAR": {
                                                                        "symbol": "QR",
                                                                        "name": "Qatari Rial",
                                                                        "symbol_native": "ر.ق.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "QAR",
                                                                        "name_plural": "Qatari rials"
                                                                    },
                                                                    "RON": {
                                                                        "symbol": "RON",
                                                                        "name": "Romanian Leu",
                                                                        "symbol_native": "RON",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "RON",
                                                                        "name_plural": "Romanian lei"
                                                                    },
                                                                    "RSD": {
                                                                        "symbol": "din.",
                                                                        "name": "Serbian Dinar",
                                                                        "symbol_native": "дин.",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "RSD",
                                                                        "name_plural": "Serbian dinars"
                                                                    },
                                                                    "RUB": {
                                                                        "symbol": "RUB",
                                                                        "name": "Russian Ruble",
                                                                        "symbol_native": "₽.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "RUB",
                                                                        "name_plural": "Russian rubles"
                                                                    },
                                                                    "RWF": {
                                                                        "symbol": "RWF",
                                                                        "name": "Rwandan Franc",
                                                                        "symbol_native": "FR",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "RWF",
                                                                        "name_plural": "Rwandan francs"
                                                                    },
                                                                    "SAR": {
                                                                        "symbol": "SR",
                                                                        "name": "Saudi Riyal",
                                                                        "symbol_native": "ر.س.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "SAR",
                                                                        "name_plural": "Saudi riyals"
                                                                    },
                                                                    "SDG": {
                                                                        "symbol": "SDG",
                                                                        "name": "Sudanese Pound",
                                                                        "symbol_native": "SDG",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "SDG",
                                                                        "name_plural": "Sudanese pounds"
                                                                    },
                                                                    "SEK": {
                                                                        "symbol": "Skr",
                                                                        "name": "Swedish Krona",
                                                                        "symbol_native": "kr",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "SEK",
                                                                        "name_plural": "Swedish kronor"
                                                                    },
                                                                    "SGD": {
                                                                        "symbol": "S$",
                                                                        "name": "Singapore Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "SGD",
                                                                        "name_plural": "Singapore dollars"
                                                                    },
                                                                    "SOS": {
                                                                        "symbol": "Ssh",
                                                                        "name": "Somali Shilling",
                                                                        "symbol_native": "Ssh",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "SOS",
                                                                        "name_plural": "Somali shillings"
                                                                    },
                                                                    "SYP": {
                                                                        "symbol": "SY£",
                                                                        "name": "Syrian Pound",
                                                                        "symbol_native": "ل.س.‏",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "SYP",
                                                                        "name_plural": "Syrian pounds"
                                                                    },
                                                                    "THB": {
                                                                        "symbol": "฿",
                                                                        "name": "Thai Baht",
                                                                        "symbol_native": "฿",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "THB",
                                                                        "name_plural": "Thai baht"
                                                                    },
                                                                    "TND": {
                                                                        "symbol": "DT",
                                                                        "name": "Tunisian Dinar",
                                                                        "symbol_native": "د.ت.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "TND",
                                                                        "name_plural": "Tunisian dinars"
                                                                    },
                                                                    "TOP": {
                                                                        "symbol": "T$",
                                                                        "name": "Tongan Paʻanga",
                                                                        "symbol_native": "T$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "TOP",
                                                                        "name_plural": "Tongan paʻanga"
                                                                    },
                                                                    "TRY": {
                                                                        "symbol": "TL",
                                                                        "name": "Turkish Lira",
                                                                        "symbol_native": "TL",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "TRY",
                                                                        "name_plural": "Turkish Lira"
                                                                    },
                                                                    "TTD": {
                                                                        "symbol": "TT$",
                                                                        "name": "Trinidad and Tobago Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "TTD",
                                                                        "name_plural": "Trinidad and Tobago dollars"
                                                                    },
                                                                    "TWD": {
                                                                        "symbol": "NT$",
                                                                        "name": "New Taiwan Dollar",
                                                                        "symbol_native": "NT$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "TWD",
                                                                        "name_plural": "New Taiwan dollars"
                                                                    },
                                                                    "TZS": {
                                                                        "symbol": "TSh",
                                                                        "name": "Tanzanian Shilling",
                                                                        "symbol_native": "TSh",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "TZS",
                                                                        "name_plural": "Tanzanian shillings"
                                                                    },
                                                                    "UAH": {
                                                                        "symbol": "₴",
                                                                        "name": "Ukrainian Hryvnia",
                                                                        "symbol_native": "₴",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "UAH",
                                                                        "name_plural": "Ukrainian hryvnias"
                                                                    },
                                                                    "USD": {
                                                                        "symbol": "$",
                                                                        "name": "US Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "USD",
                                                                        "name_plural": "US dollars"
                                                                    },
                                                                    "UGX": {
                                                                        "symbol": "USh",
                                                                        "name": "Ugandan Shilling",
                                                                        "symbol_native": "USh",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "UGX",
                                                                        "name_plural": "Ugandan shillings"
                                                                    },
                                                                    "UYU": {
                                                                        "symbol": "$U",
                                                                        "name": "Uruguayan Peso",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "UYU",
                                                                        "name_plural": "Uruguayan pesos"
                                                                    },
                                                                    "UZS": {
                                                                        "symbol": "UZS",
                                                                        "name": "Uzbekistan Som",
                                                                        "symbol_native": "UZS",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "UZS",
                                                                        "name_plural": "Uzbekistan som"
                                                                    },
                                                                    "VEF": {
                                                                        "symbol": "Bs.F.",
                                                                        "name": "Venezuelan Bolívar",
                                                                        "symbol_native": "Bs.F.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "VEF",
                                                                        "name_plural": "Venezuelan bolívars"
                                                                    },
                                                                    "VND": {
                                                                        "symbol": "₫",
                                                                        "name": "Vietnamese Dong",
                                                                        "symbol_native": "₫",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "VND",
                                                                        "name_plural": "Vietnamese dong"
                                                                    },
                                                                    "XAF": {
                                                                        "symbol": "FCFA",
                                                                        "name": "CFA Franc BEAC",
                                                                        "symbol_native": "FCFA",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "XAF",
                                                                        "name_plural": "CFA francs BEAC"
                                                                    },
                                                                    "XOF": {
                                                                        "symbol": "CFA",
                                                                        "name": "CFA Franc BCEAO",
                                                                        "symbol_native": "CFA",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "XOF",
                                                                        "name_plural": "CFA francs BCEAO"
                                                                    },
                                                                    "YER": {
                                                                        "symbol": "YR",
                                                                        "name": "Yemeni Rial",
                                                                        "symbol_native": "ر.ي.‏",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "YER",
                                                                        "name_plural": "Yemeni rials"
                                                                    },
                                                                    "ZAR": {
                                                                        "symbol": "R",
                                                                        "name": "South African Rand",
                                                                        "symbol_native": "R",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "ZAR",
                                                                        "name_plural": "South African rand"
                                                                    },
                                                                    "ZMK": {
                                                                        "symbol": "ZK",
                                                                        "name": "Zambian Kwacha",
                                                                        "symbol_native": "ZK",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "ZMK",
                                                                        "name_plural": "Zambian kwachas"
                                                                    },
                                                                    "ZWL": {
                                                                        "symbol": "ZWL$",
                                                                        "name": "Zimbabwean Dollar",
                                                                        "symbol_native": "ZWL$",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "ZWL",
                                                                        "name_plural": "Zimbabwean Dollar"
                                                                    }
                                                                }
                                                            },
                                                            "template": "<span> {{ item.name }} {{ item.code }} </span>\n",
                                                            "customDefaultValue": "value = {\n    \"symbol\": \"$\",\n    \"name\": \"US Dollar\",\n    \"symbol_native\": \"$\",\n    \"decimal_digits\": 2,\n    \"rounding\": 0,\n    \"code\": \"USD\",\n    \"name_plural\": \"US dollars\"\n  }",
                                                            "validate": {
                                                                "required": true
                                                            },
                                                            "validateWhenHidden": false,
                                                            "key": "giftCJs",
                                                            "type": "select",
                                                            "input": true
                                                        },
                                                        {
                                                            "label": "Amount",
                                                            "calculateValue": "if(row.giftBJs){\nvalue= row.giftCJs.symbol + ' ' + row.giftBJs.toLocaleString()\n}",
                                                            "key": "giftDJs",
                                                            "type": "hidden",
                                                            "input": true,
                                                            "tableView": false
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "legend": "<i class=\"fa-solid fa-pen\"></i> Other",
                                            "customClass": "sof-ques-fields",
                                            "key": "fieldSetOtherJs",
                                            "customConditional": "show = row.sofJs.d",
                                            "type": "fieldset",
                                            "label": "<i class='fa-solid fa-pen'></i> Other",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "Proof of other income from Joint Account Holder",
                                                    "calculateValue": "let res = false;\nconst docs = row.EDDdoc.additionalDocRequests;\nif (Array.isArray(docs)) {\n  docs.forEach((ele)=>{\n    if (ele.name == 'Proof of other income from Main Account Holder' || ele.name == 'Proof of other income from Joint Account Holder') res = true;\n  })\n}\n\nvalue = {}\n\nif(res){\nvalue.type = \"Other\";\nvalue.purposesOfUse = [\"ProofOfOtherIncomeFromJointAccountHolder\"];\nvalue.fields = {\"Notes\": \"Please upload any type of document(s) that evidences your income that you administered as a source of funds/wealth type \\\"other\\\".\\n\\nIf you believe the uploaded document requires explanation, please provide that explanation in a word document also to be uploaded here.\"};\nvalue.customEvidenceType = component.label;\n}\nelse{\nvalue = ''\n}\n",
                                                    "key": "sofJsd",
                                                    "tags": [
                                                        "EVD"
                                                    ],
                                                    "type": "hidden",
                                                    "input": true,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "Is this option being selected for Source of Wealth or Source of Funds?",
                                                    "optionsLabelPosition": "right",
                                                    "inline": false,
                                                    "tableView": false,
                                                    "values": [
                                                        {
                                                            "label": "Source of Wealth",
                                                            "value": "a",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "Source of Funds",
                                                            "value": "b",
                                                            "shortcut": ""
                                                        },
                                                        {
                                                            "label": "Source of Wealth and Source of Funds",
                                                            "value": "c",
                                                            "shortcut": ""
                                                        }
                                                    ],
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "options3Js",
                                                    "type": "radio",
                                                    "input": true
                                                },
                                                {
                                                    "customClass": "custom-droptext",
                                                    "key": "fieldSet53Js",
                                                    "type": "fieldset",
                                                    "label": "",
                                                    "input": false,
                                                    "tableView": false,
                                                    "components": [
                                                        {
                                                            "label": "Other amount",
                                                            "mask": false,
                                                            "tableView": false,
                                                            "delimiter": true,
                                                            "requireDecimal": false,
                                                            "inputFormat": "plain",
                                                            "validate": {
                                                                "required": true
                                                            },
                                                            "key": "otherAJs",
                                                            "type": "number",
                                                            "input": true
                                                        },
                                                        {
                                                            "label": "Currency",
                                                            "widget": "choicesjs",
                                                            "hideLabel": true,
                                                            "tableView": true,
                                                            "dataSrc": "json",
                                                            "data": {
                                                                "json": {
                                                                    "AED": {
                                                                        "symbol": "AED",
                                                                        "name": "United Arab Emirates Dirham",
                                                                        "symbol_native": "د.إ.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "AED",
                                                                        "name_plural": "UAE dirhams"
                                                                    },
                                                                    "AFN": {
                                                                        "symbol": "Af",
                                                                        "name": "Afghan Afghani",
                                                                        "symbol_native": "؋",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "AFN",
                                                                        "name_plural": "Afghan Afghanis"
                                                                    },
                                                                    "ALL": {
                                                                        "symbol": "ALL",
                                                                        "name": "Albanian Lek",
                                                                        "symbol_native": "Lek",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "ALL",
                                                                        "name_plural": "Albanian lekë"
                                                                    },
                                                                    "AMD": {
                                                                        "symbol": "AMD",
                                                                        "name": "Armenian Dram",
                                                                        "symbol_native": "դր.",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "AMD",
                                                                        "name_plural": "Armenian drams"
                                                                    },
                                                                    "ARS": {
                                                                        "symbol": "AR$",
                                                                        "name": "Argentine Peso",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "ARS",
                                                                        "name_plural": "Argentine pesos"
                                                                    },
                                                                    "AUD": {
                                                                        "symbol": "AU$",
                                                                        "name": "Australian Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "AUD",
                                                                        "name_plural": "Australian dollars"
                                                                    },
                                                                    "AZN": {
                                                                        "symbol": "man.",
                                                                        "name": "Azerbaijani Manat",
                                                                        "symbol_native": "ман.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "AZN",
                                                                        "name_plural": "Azerbaijani manats"
                                                                    },
                                                                    "BAM": {
                                                                        "symbol": "KM",
                                                                        "name": "Bosnia-Herzegovina Convertible Mark",
                                                                        "symbol_native": "KM",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BAM",
                                                                        "name_plural": "Bosnia-Herzegovina convertible marks"
                                                                    },
                                                                    "BDT": {
                                                                        "symbol": "Tk",
                                                                        "name": "Bangladeshi Taka",
                                                                        "symbol_native": "৳",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BDT",
                                                                        "name_plural": "Bangladeshi takas"
                                                                    },
                                                                    "BGN": {
                                                                        "symbol": "BGN",
                                                                        "name": "Bulgarian Lev",
                                                                        "symbol_native": "лв.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BGN",
                                                                        "name_plural": "Bulgarian leva"
                                                                    },
                                                                    "BHD": {
                                                                        "symbol": "BD",
                                                                        "name": "Bahraini Dinar",
                                                                        "symbol_native": "د.ب.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "BHD",
                                                                        "name_plural": "Bahraini dinars"
                                                                    },
                                                                    "BIF": {
                                                                        "symbol": "FBu",
                                                                        "name": "Burundian Franc",
                                                                        "symbol_native": "FBu",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "BIF",
                                                                        "name_plural": "Burundian francs"
                                                                    },
                                                                    "BND": {
                                                                        "symbol": "BN$",
                                                                        "name": "Brunei Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BND",
                                                                        "name_plural": "Brunei dollars"
                                                                    },
                                                                    "BOB": {
                                                                        "symbol": "Bs",
                                                                        "name": "Bolivian Boliviano",
                                                                        "symbol_native": "Bs",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BOB",
                                                                        "name_plural": "Bolivian bolivianos"
                                                                    },
                                                                    "BRL": {
                                                                        "symbol": "R$",
                                                                        "name": "Brazilian Real",
                                                                        "symbol_native": "R$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BRL",
                                                                        "name_plural": "Brazilian reals"
                                                                    },
                                                                    "BWP": {
                                                                        "symbol": "BWP",
                                                                        "name": "Botswanan Pula",
                                                                        "symbol_native": "P",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BWP",
                                                                        "name_plural": "Botswanan pulas"
                                                                    },
                                                                    "BYN": {
                                                                        "symbol": "Br",
                                                                        "name": "Belarusian Ruble",
                                                                        "symbol_native": "руб.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BYN",
                                                                        "name_plural": "Belarusian rubles"
                                                                    },
                                                                    "BZD": {
                                                                        "symbol": "BZ$",
                                                                        "name": "Belize Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "BZD",
                                                                        "name_plural": "Belize dollars"
                                                                    },
                                                                    "CAD": {
                                                                        "symbol": "CA$",
                                                                        "name": "Canadian Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "CAD",
                                                                        "name_plural": "Canadian dollars"
                                                                    },
                                                                    "CDF": {
                                                                        "symbol": "CDF",
                                                                        "name": "Congolese Franc",
                                                                        "symbol_native": "FrCD",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "CDF",
                                                                        "name_plural": "Congolese francs"
                                                                    },
                                                                    "CHF": {
                                                                        "symbol": "CHF",
                                                                        "name": "Swiss Franc",
                                                                        "symbol_native": "CHF",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0.05,
                                                                        "code": "CHF",
                                                                        "name_plural": "Swiss francs"
                                                                    },
                                                                    "CLP": {
                                                                        "symbol": "CL$",
                                                                        "name": "Chilean Peso",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "CLP",
                                                                        "name_plural": "Chilean pesos"
                                                                    },
                                                                    "CNY": {
                                                                        "symbol": "CN¥",
                                                                        "name": "Chinese Yuan",
                                                                        "symbol_native": "CN¥",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "CNY",
                                                                        "name_plural": "Chinese yuan"
                                                                    },
                                                                    "COP": {
                                                                        "symbol": "CO$",
                                                                        "name": "Colombian Peso",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "COP",
                                                                        "name_plural": "Colombian pesos"
                                                                    },
                                                                    "CRC": {
                                                                        "symbol": "₡",
                                                                        "name": "Costa Rican Colón",
                                                                        "symbol_native": "₡",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "CRC",
                                                                        "name_plural": "Costa Rican colóns"
                                                                    },
                                                                    "CVE": {
                                                                        "symbol": "CV$",
                                                                        "name": "Cape Verdean Escudo",
                                                                        "symbol_native": "CV$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "CVE",
                                                                        "name_plural": "Cape Verdean escudos"
                                                                    },
                                                                    "CZK": {
                                                                        "symbol": "Kč",
                                                                        "name": "Czech Republic Koruna",
                                                                        "symbol_native": "Kč",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "CZK",
                                                                        "name_plural": "Czech Republic korunas"
                                                                    },
                                                                    "DJF": {
                                                                        "symbol": "Fdj",
                                                                        "name": "Djiboutian Franc",
                                                                        "symbol_native": "Fdj",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "DJF",
                                                                        "name_plural": "Djiboutian francs"
                                                                    },
                                                                    "DKK": {
                                                                        "symbol": "Dkr",
                                                                        "name": "Danish Krone",
                                                                        "symbol_native": "kr",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "DKK",
                                                                        "name_plural": "Danish kroner"
                                                                    },
                                                                    "DOP": {
                                                                        "symbol": "RD$",
                                                                        "name": "Dominican Peso",
                                                                        "symbol_native": "RD$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "DOP",
                                                                        "name_plural": "Dominican pesos"
                                                                    },
                                                                    "DZD": {
                                                                        "symbol": "DA",
                                                                        "name": "Algerian Dinar",
                                                                        "symbol_native": "د.ج.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "DZD",
                                                                        "name_plural": "Algerian dinars"
                                                                    },
                                                                    "EUR": {
                                                                        "symbol": "€",
                                                                        "name": "Euro",
                                                                        "symbol_native": "€",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "EUR",
                                                                        "name_plural": "euros"
                                                                    },
                                                                    "EEK": {
                                                                        "symbol": "Ekr",
                                                                        "name": "Estonian Kroon",
                                                                        "symbol_native": "kr",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "EEK",
                                                                        "name_plural": "Estonian kroons"
                                                                    },
                                                                    "EGP": {
                                                                        "symbol": "EGP",
                                                                        "name": "Egyptian Pound",
                                                                        "symbol_native": "ج.م.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "EGP",
                                                                        "name_plural": "Egyptian pounds"
                                                                    },
                                                                    "ERN": {
                                                                        "symbol": "Nfk",
                                                                        "name": "Eritrean Nakfa",
                                                                        "symbol_native": "Nfk",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "ERN",
                                                                        "name_plural": "Eritrean nakfas"
                                                                    },
                                                                    "ETB": {
                                                                        "symbol": "Br",
                                                                        "name": "Ethiopian Birr",
                                                                        "symbol_native": "Br",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "ETB",
                                                                        "name_plural": "Ethiopian birrs"
                                                                    },
                                                                    "GBP": {
                                                                        "symbol": "£",
                                                                        "name": "British Pound Sterling",
                                                                        "symbol_native": "£",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "GBP",
                                                                        "name_plural": "British pounds sterling"
                                                                    },
                                                                    "GEL": {
                                                                        "symbol": "GEL",
                                                                        "name": "Georgian Lari",
                                                                        "symbol_native": "GEL",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "GEL",
                                                                        "name_plural": "Georgian laris"
                                                                    },
                                                                    "GHS": {
                                                                        "symbol": "GH₵",
                                                                        "name": "Ghanaian Cedi",
                                                                        "symbol_native": "GH₵",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "GHS",
                                                                        "name_plural": "Ghanaian cedis"
                                                                    },
                                                                    "GNF": {
                                                                        "symbol": "FG",
                                                                        "name": "Guinean Franc",
                                                                        "symbol_native": "FG",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "GNF",
                                                                        "name_plural": "Guinean francs"
                                                                    },
                                                                    "GTQ": {
                                                                        "symbol": "GTQ",
                                                                        "name": "Guatemalan Quetzal",
                                                                        "symbol_native": "Q",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "GTQ",
                                                                        "name_plural": "Guatemalan quetzals"
                                                                    },
                                                                    "HKD": {
                                                                        "symbol": "HK$",
                                                                        "name": "Hong Kong Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "HKD",
                                                                        "name_plural": "Hong Kong dollars"
                                                                    },
                                                                    "HNL": {
                                                                        "symbol": "HNL",
                                                                        "name": "Honduran Lempira",
                                                                        "symbol_native": "L",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "HNL",
                                                                        "name_plural": "Honduran lempiras"
                                                                    },
                                                                    "HRK": {
                                                                        "symbol": "kn",
                                                                        "name": "Croatian Kuna",
                                                                        "symbol_native": "kn",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "HRK",
                                                                        "name_plural": "Croatian kunas"
                                                                    },
                                                                    "HUF": {
                                                                        "symbol": "Ft",
                                                                        "name": "Hungarian Forint",
                                                                        "symbol_native": "Ft",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "HUF",
                                                                        "name_plural": "Hungarian forints"
                                                                    },
                                                                    "IDR": {
                                                                        "symbol": "Rp",
                                                                        "name": "Indonesian Rupiah",
                                                                        "symbol_native": "Rp",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "IDR",
                                                                        "name_plural": "Indonesian rupiahs"
                                                                    },
                                                                    "ILS": {
                                                                        "symbol": "₪",
                                                                        "name": "Israeli New Sheqel",
                                                                        "symbol_native": "₪",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "ILS",
                                                                        "name_plural": "Israeli new sheqels"
                                                                    },
                                                                    "INR": {
                                                                        "symbol": "Rs",
                                                                        "name": "Indian Rupee",
                                                                        "symbol_native": "₹",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "INR",
                                                                        "name_plural": "Indian rupees"
                                                                    },
                                                                    "IQD": {
                                                                        "symbol": "IQD",
                                                                        "name": "Iraqi Dinar",
                                                                        "symbol_native": "د.ع.‏",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "IQD",
                                                                        "name_plural": "Iraqi dinars"
                                                                    },
                                                                    "IRR": {
                                                                        "symbol": "IRR",
                                                                        "name": "Iranian Rial",
                                                                        "symbol_native": "﷼",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "IRR",
                                                                        "name_plural": "Iranian rials"
                                                                    },
                                                                    "ISK": {
                                                                        "symbol": "Ikr",
                                                                        "name": "Icelandic Króna",
                                                                        "symbol_native": "kr",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "ISK",
                                                                        "name_plural": "Icelandic krónur"
                                                                    },
                                                                    "JMD": {
                                                                        "symbol": "J$",
                                                                        "name": "Jamaican Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "JMD",
                                                                        "name_plural": "Jamaican dollars"
                                                                    },
                                                                    "JOD": {
                                                                        "symbol": "JD",
                                                                        "name": "Jordanian Dinar",
                                                                        "symbol_native": "د.أ.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "JOD",
                                                                        "name_plural": "Jordanian dinars"
                                                                    },
                                                                    "JPY": {
                                                                        "symbol": "¥",
                                                                        "name": "Japanese Yen",
                                                                        "symbol_native": "￥",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "JPY",
                                                                        "name_plural": "Japanese yen"
                                                                    },
                                                                    "KES": {
                                                                        "symbol": "Ksh",
                                                                        "name": "Kenyan Shilling",
                                                                        "symbol_native": "Ksh",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "KES",
                                                                        "name_plural": "Kenyan shillings"
                                                                    },
                                                                    "KHR": {
                                                                        "symbol": "KHR",
                                                                        "name": "Cambodian Riel",
                                                                        "symbol_native": "៛",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "KHR",
                                                                        "name_plural": "Cambodian riels"
                                                                    },
                                                                    "KMF": {
                                                                        "symbol": "CF",
                                                                        "name": "Comorian Franc",
                                                                        "symbol_native": "FC",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "KMF",
                                                                        "name_plural": "Comorian francs"
                                                                    },
                                                                    "KRW": {
                                                                        "symbol": "₩",
                                                                        "name": "South Korean Won",
                                                                        "symbol_native": "₩",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "KRW",
                                                                        "name_plural": "South Korean won"
                                                                    },
                                                                    "KWD": {
                                                                        "symbol": "KD",
                                                                        "name": "Kuwaiti Dinar",
                                                                        "symbol_native": "د.ك.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "KWD",
                                                                        "name_plural": "Kuwaiti dinars"
                                                                    },
                                                                    "KZT": {
                                                                        "symbol": "KZT",
                                                                        "name": "Kazakhstani Tenge",
                                                                        "symbol_native": "тңг.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "KZT",
                                                                        "name_plural": "Kazakhstani tenges"
                                                                    },
                                                                    "LBP": {
                                                                        "symbol": "LB£",
                                                                        "name": "Lebanese Pound",
                                                                        "symbol_native": "ل.ل.‏",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "LBP",
                                                                        "name_plural": "Lebanese pounds"
                                                                    },
                                                                    "LKR": {
                                                                        "symbol": "SLRs",
                                                                        "name": "Sri Lankan Rupee",
                                                                        "symbol_native": "SL Re",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "LKR",
                                                                        "name_plural": "Sri Lankan rupees"
                                                                    },
                                                                    "LTL": {
                                                                        "symbol": "Lt",
                                                                        "name": "Lithuanian Litas",
                                                                        "symbol_native": "Lt",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "LTL",
                                                                        "name_plural": "Lithuanian litai"
                                                                    },
                                                                    "LVL": {
                                                                        "symbol": "Ls",
                                                                        "name": "Latvian Lats",
                                                                        "symbol_native": "Ls",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "LVL",
                                                                        "name_plural": "Latvian lati"
                                                                    },
                                                                    "LYD": {
                                                                        "symbol": "LD",
                                                                        "name": "Libyan Dinar",
                                                                        "symbol_native": "د.ل.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "LYD",
                                                                        "name_plural": "Libyan dinars"
                                                                    },
                                                                    "MAD": {
                                                                        "symbol": "MAD",
                                                                        "name": "Moroccan Dirham",
                                                                        "symbol_native": "د.م.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MAD",
                                                                        "name_plural": "Moroccan dirhams"
                                                                    },
                                                                    "MDL": {
                                                                        "symbol": "MDL",
                                                                        "name": "Moldovan Leu",
                                                                        "symbol_native": "MDL",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MDL",
                                                                        "name_plural": "Moldovan lei"
                                                                    },
                                                                    "MGA": {
                                                                        "symbol": "MGA",
                                                                        "name": "Malagasy Ariary",
                                                                        "symbol_native": "MGA",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "MGA",
                                                                        "name_plural": "Malagasy Ariaries"
                                                                    },
                                                                    "MKD": {
                                                                        "symbol": "MKD",
                                                                        "name": "Macedonian Denar",
                                                                        "symbol_native": "MKD",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MKD",
                                                                        "name_plural": "Macedonian denari"
                                                                    },
                                                                    "MMK": {
                                                                        "symbol": "MMK",
                                                                        "name": "Myanma Kyat",
                                                                        "symbol_native": "K",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "MMK",
                                                                        "name_plural": "Myanma kyats"
                                                                    },
                                                                    "MOP": {
                                                                        "symbol": "MOP$",
                                                                        "name": "Macanese Pataca",
                                                                        "symbol_native": "MOP$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MOP",
                                                                        "name_plural": "Macanese patacas"
                                                                    },
                                                                    "MUR": {
                                                                        "symbol": "MURs",
                                                                        "name": "Mauritian Rupee",
                                                                        "symbol_native": "MURs",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "MUR",
                                                                        "name_plural": "Mauritian rupees"
                                                                    },
                                                                    "MXN": {
                                                                        "symbol": "MX$",
                                                                        "name": "Mexican Peso",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MXN",
                                                                        "name_plural": "Mexican pesos"
                                                                    },
                                                                    "MYR": {
                                                                        "symbol": "RM",
                                                                        "name": "Malaysian Ringgit",
                                                                        "symbol_native": "RM",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MYR",
                                                                        "name_plural": "Malaysian ringgits"
                                                                    },
                                                                    "MZN": {
                                                                        "symbol": "MTn",
                                                                        "name": "Mozambican Metical",
                                                                        "symbol_native": "MTn",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "MZN",
                                                                        "name_plural": "Mozambican meticals"
                                                                    },
                                                                    "NAD": {
                                                                        "symbol": "N$",
                                                                        "name": "Namibian Dollar",
                                                                        "symbol_native": "N$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NAD",
                                                                        "name_plural": "Namibian dollars"
                                                                    },
                                                                    "NGN": {
                                                                        "symbol": "₦",
                                                                        "name": "Nigerian Naira",
                                                                        "symbol_native": "₦",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NGN",
                                                                        "name_plural": "Nigerian nairas"
                                                                    },
                                                                    "NIO": {
                                                                        "symbol": "C$",
                                                                        "name": "Nicaraguan Córdoba",
                                                                        "symbol_native": "C$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NIO",
                                                                        "name_plural": "Nicaraguan córdobas"
                                                                    },
                                                                    "NOK": {
                                                                        "symbol": "Nkr",
                                                                        "name": "Norwegian Krone",
                                                                        "symbol_native": "kr",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NOK",
                                                                        "name_plural": "Norwegian kroner"
                                                                    },
                                                                    "NPR": {
                                                                        "symbol": "NPRs",
                                                                        "name": "Nepalese Rupee",
                                                                        "symbol_native": "नेरू",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NPR",
                                                                        "name_plural": "Nepalese rupees"
                                                                    },
                                                                    "NZD": {
                                                                        "symbol": "NZ$",
                                                                        "name": "New Zealand Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "NZD",
                                                                        "name_plural": "New Zealand dollars"
                                                                    },
                                                                    "OMR": {
                                                                        "symbol": "OMR",
                                                                        "name": "Omani Rial",
                                                                        "symbol_native": "ر.ع.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "OMR",
                                                                        "name_plural": "Omani rials"
                                                                    },
                                                                    "PAB": {
                                                                        "symbol": "B/.",
                                                                        "name": "Panamanian Balboa",
                                                                        "symbol_native": "B/.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "PAB",
                                                                        "name_plural": "Panamanian balboas"
                                                                    },
                                                                    "PEN": {
                                                                        "symbol": "S/.",
                                                                        "name": "Peruvian Nuevo Sol",
                                                                        "symbol_native": "S/.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "PEN",
                                                                        "name_plural": "Peruvian nuevos soles"
                                                                    },
                                                                    "PHP": {
                                                                        "symbol": "₱",
                                                                        "name": "Philippine Peso",
                                                                        "symbol_native": "₱",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "PHP",
                                                                        "name_plural": "Philippine pesos"
                                                                    },
                                                                    "PKR": {
                                                                        "symbol": "PKRs",
                                                                        "name": "Pakistani Rupee",
                                                                        "symbol_native": "₨",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "PKR",
                                                                        "name_plural": "Pakistani rupees"
                                                                    },
                                                                    "PLN": {
                                                                        "symbol": "zł",
                                                                        "name": "Polish Zloty",
                                                                        "symbol_native": "zł",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "PLN",
                                                                        "name_plural": "Polish zlotys"
                                                                    },
                                                                    "PYG": {
                                                                        "symbol": "₲",
                                                                        "name": "Paraguayan Guarani",
                                                                        "symbol_native": "₲",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "PYG",
                                                                        "name_plural": "Paraguayan guaranis"
                                                                    },
                                                                    "QAR": {
                                                                        "symbol": "QR",
                                                                        "name": "Qatari Rial",
                                                                        "symbol_native": "ر.ق.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "QAR",
                                                                        "name_plural": "Qatari rials"
                                                                    },
                                                                    "RON": {
                                                                        "symbol": "RON",
                                                                        "name": "Romanian Leu",
                                                                        "symbol_native": "RON",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "RON",
                                                                        "name_plural": "Romanian lei"
                                                                    },
                                                                    "RSD": {
                                                                        "symbol": "din.",
                                                                        "name": "Serbian Dinar",
                                                                        "symbol_native": "дин.",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "RSD",
                                                                        "name_plural": "Serbian dinars"
                                                                    },
                                                                    "RUB": {
                                                                        "symbol": "RUB",
                                                                        "name": "Russian Ruble",
                                                                        "symbol_native": "₽.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "RUB",
                                                                        "name_plural": "Russian rubles"
                                                                    },
                                                                    "RWF": {
                                                                        "symbol": "RWF",
                                                                        "name": "Rwandan Franc",
                                                                        "symbol_native": "FR",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "RWF",
                                                                        "name_plural": "Rwandan francs"
                                                                    },
                                                                    "SAR": {
                                                                        "symbol": "SR",
                                                                        "name": "Saudi Riyal",
                                                                        "symbol_native": "ر.س.‏",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "SAR",
                                                                        "name_plural": "Saudi riyals"
                                                                    },
                                                                    "SDG": {
                                                                        "symbol": "SDG",
                                                                        "name": "Sudanese Pound",
                                                                        "symbol_native": "SDG",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "SDG",
                                                                        "name_plural": "Sudanese pounds"
                                                                    },
                                                                    "SEK": {
                                                                        "symbol": "Skr",
                                                                        "name": "Swedish Krona",
                                                                        "symbol_native": "kr",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "SEK",
                                                                        "name_plural": "Swedish kronor"
                                                                    },
                                                                    "SGD": {
                                                                        "symbol": "S$",
                                                                        "name": "Singapore Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "SGD",
                                                                        "name_plural": "Singapore dollars"
                                                                    },
                                                                    "SOS": {
                                                                        "symbol": "Ssh",
                                                                        "name": "Somali Shilling",
                                                                        "symbol_native": "Ssh",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "SOS",
                                                                        "name_plural": "Somali shillings"
                                                                    },
                                                                    "SYP": {
                                                                        "symbol": "SY£",
                                                                        "name": "Syrian Pound",
                                                                        "symbol_native": "ل.س.‏",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "SYP",
                                                                        "name_plural": "Syrian pounds"
                                                                    },
                                                                    "THB": {
                                                                        "symbol": "฿",
                                                                        "name": "Thai Baht",
                                                                        "symbol_native": "฿",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "THB",
                                                                        "name_plural": "Thai baht"
                                                                    },
                                                                    "TND": {
                                                                        "symbol": "DT",
                                                                        "name": "Tunisian Dinar",
                                                                        "symbol_native": "د.ت.‏",
                                                                        "decimal_digits": 3,
                                                                        "rounding": 0,
                                                                        "code": "TND",
                                                                        "name_plural": "Tunisian dinars"
                                                                    },
                                                                    "TOP": {
                                                                        "symbol": "T$",
                                                                        "name": "Tongan Paʻanga",
                                                                        "symbol_native": "T$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "TOP",
                                                                        "name_plural": "Tongan paʻanga"
                                                                    },
                                                                    "TRY": {
                                                                        "symbol": "TL",
                                                                        "name": "Turkish Lira",
                                                                        "symbol_native": "TL",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "TRY",
                                                                        "name_plural": "Turkish Lira"
                                                                    },
                                                                    "TTD": {
                                                                        "symbol": "TT$",
                                                                        "name": "Trinidad and Tobago Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "TTD",
                                                                        "name_plural": "Trinidad and Tobago dollars"
                                                                    },
                                                                    "TWD": {
                                                                        "symbol": "NT$",
                                                                        "name": "New Taiwan Dollar",
                                                                        "symbol_native": "NT$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "TWD",
                                                                        "name_plural": "New Taiwan dollars"
                                                                    },
                                                                    "TZS": {
                                                                        "symbol": "TSh",
                                                                        "name": "Tanzanian Shilling",
                                                                        "symbol_native": "TSh",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "TZS",
                                                                        "name_plural": "Tanzanian shillings"
                                                                    },
                                                                    "UAH": {
                                                                        "symbol": "₴",
                                                                        "name": "Ukrainian Hryvnia",
                                                                        "symbol_native": "₴",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "UAH",
                                                                        "name_plural": "Ukrainian hryvnias"
                                                                    },
                                                                    "USD": {
                                                                        "symbol": "$",
                                                                        "name": "US Dollar",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "USD",
                                                                        "name_plural": "US dollars"
                                                                    },
                                                                    "UGX": {
                                                                        "symbol": "USh",
                                                                        "name": "Ugandan Shilling",
                                                                        "symbol_native": "USh",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "UGX",
                                                                        "name_plural": "Ugandan shillings"
                                                                    },
                                                                    "UYU": {
                                                                        "symbol": "$U",
                                                                        "name": "Uruguayan Peso",
                                                                        "symbol_native": "$",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "UYU",
                                                                        "name_plural": "Uruguayan pesos"
                                                                    },
                                                                    "UZS": {
                                                                        "symbol": "UZS",
                                                                        "name": "Uzbekistan Som",
                                                                        "symbol_native": "UZS",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "UZS",
                                                                        "name_plural": "Uzbekistan som"
                                                                    },
                                                                    "VEF": {
                                                                        "symbol": "Bs.F.",
                                                                        "name": "Venezuelan Bolívar",
                                                                        "symbol_native": "Bs.F.",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "VEF",
                                                                        "name_plural": "Venezuelan bolívars"
                                                                    },
                                                                    "VND": {
                                                                        "symbol": "₫",
                                                                        "name": "Vietnamese Dong",
                                                                        "symbol_native": "₫",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "VND",
                                                                        "name_plural": "Vietnamese dong"
                                                                    },
                                                                    "XAF": {
                                                                        "symbol": "FCFA",
                                                                        "name": "CFA Franc BEAC",
                                                                        "symbol_native": "FCFA",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "XAF",
                                                                        "name_plural": "CFA francs BEAC"
                                                                    },
                                                                    "XOF": {
                                                                        "symbol": "CFA",
                                                                        "name": "CFA Franc BCEAO",
                                                                        "symbol_native": "CFA",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "XOF",
                                                                        "name_plural": "CFA francs BCEAO"
                                                                    },
                                                                    "YER": {
                                                                        "symbol": "YR",
                                                                        "name": "Yemeni Rial",
                                                                        "symbol_native": "ر.ي.‏",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "YER",
                                                                        "name_plural": "Yemeni rials"
                                                                    },
                                                                    "ZAR": {
                                                                        "symbol": "R",
                                                                        "name": "South African Rand",
                                                                        "symbol_native": "R",
                                                                        "decimal_digits": 2,
                                                                        "rounding": 0,
                                                                        "code": "ZAR",
                                                                        "name_plural": "South African rand"
                                                                    },
                                                                    "ZMK": {
                                                                        "symbol": "ZK",
                                                                        "name": "Zambian Kwacha",
                                                                        "symbol_native": "ZK",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "ZMK",
                                                                        "name_plural": "Zambian kwachas"
                                                                    },
                                                                    "ZWL": {
                                                                        "symbol": "ZWL$",
                                                                        "name": "Zimbabwean Dollar",
                                                                        "symbol_native": "ZWL$",
                                                                        "decimal_digits": 0,
                                                                        "rounding": 0,
                                                                        "code": "ZWL",
                                                                        "name_plural": "Zimbabwean Dollar"
                                                                    }
                                                                }
                                                            },
                                                            "template": "<span> {{ item.name }} {{ item.code }} </span>\n",
                                                            "customDefaultValue": "value = {\n    \"symbol\": \"$\",\n    \"name\": \"US Dollar\",\n    \"symbol_native\": \"$\",\n    \"decimal_digits\": 2,\n    \"rounding\": 0,\n    \"code\": \"USD\",\n    \"name_plural\": \"US dollars\"\n  }",
                                                            "validate": {
                                                                "required": true
                                                            },
                                                            "validateWhenHidden": false,
                                                            "key": "otherCJs",
                                                            "type": "select",
                                                            "input": true
                                                        },
                                                        {
                                                            "label": "Amount",
                                                            "calculateValue": "if(row.otherAJs){\nvalue=row.otherCJs.symbol + ' ' + row.otherAJs.toLocaleString()\n}",
                                                            "key": "otherDJs",
                                                            "type": "hidden",
                                                            "input": true,
                                                            "tableView": false
                                                        }
                                                    ]
                                                },
                                                {
                                                    "label": "Provide details of any other sources of wealth",
                                                    "autoExpand": false,
                                                    "tableView": true,
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "otherJs",
                                                    "type": "textarea",
                                                    "input": true
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "customConditional": "show = data.isJointInvestment === 'yes';"
                        },
                        {
                            "label": "Representations, Warranties, Consents, indemnities and Acknowledgements [Joint]",
                            "key": "representationsWarrantiesConsentsIndemnitiesAndAcknowledgementsJointJs",
                            "components": [
                                {
                                    "key": "fieldSet352Js",
                                    "customConditional": "show = row.chooseType == 'individual' && row.isJointInvestment == 'yes'",
                                    "type": "fieldset",
                                    "label": "Field Set",
                                    "input": false,
                                    "tableView": false,
                                    "components": [
                                        {
                                            "label": "HTML",
                                            "attrs": [
                                                {
                                                    "attr": "",
                                                    "value": ""
                                                }
                                            ],
                                            "content": "Representations, Warranties,Consents, <br>\n indemnities and Acknowledgements",
                                            "refreshOnChange": false,
                                            "customClass": "page-title",
                                            "key": "html5Js",
                                            "type": "htmlelement",
                                            "input": false,
                                            "tableView": false
                                        },
                                        {
                                            "key": "fieldSet38Js",
                                            "type": "fieldset",
                                            "label": "Field Set",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "HTML",
                                                    "tag": "div",
                                                    "attrs": [
                                                        {
                                                            "attr": "",
                                                            "value": ""
                                                        }
                                                    ],
                                                    "content": "<div class = 'glossary-modal glossary-hide'>\r\n  <div class=\"openModalFBtn open-modal no-border\">\r\n  <div class=\"g-tooltip\" id=\"customTooltip\" style=\"background-color: var(--client-secondary-color)\">Terms & Conditions</div>\r\n  </div>\r\n</div>",
                                                    "refreshOnChange": false,
                                                    "key": "modalZ1Js",
                                                    "type": "htmlelement",
                                                    "input": false,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "I have read and under the Terms & Conditions of the investment as well as the Offering Documents of the fund",
                                                    "tableView": false,
                                                    "defaultValue": false,
                                                    "validate": {
                                                        "required": true
                                                    },
                                                    "key": "warJs",
                                                    "type": "checkbox",
                                                    "input": true
                                                }
                                            ]
                                        },
                                        {
                                            "key": "fileUploadFs2Js",
                                            "type": "fieldset",
                                            "label": "",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "Please upload certified documents sufficient to show: <ul> <li>Name of Trust</li> <li>Date of Establishment</li> <li>Proper Law</li> </ul>",
                                                    "calculateValue": "value = {}\n\nif(row.typeOfLegalEntity == 'Trust'){\nvalue.type = \"Other\";\nvalue.purposesOfUse = [\"GeneralPurpose\"];\nvalue.fields = {\"Notes\": \"Add your note\"};\nvalue.customEvidenceType = component.label;\n}\nelse{\nvalue = ''\n}\n",
                                                    "key": "evd382Js",
                                                    "tags": [
                                                        "EVD"
                                                    ],
                                                    "type": "hidden",
                                                    "input": true,
                                                    "tableView": false
                                                },
                                                {
                                                    "label": "Please upload certified documents sufficient to show: <ul> <li>Name of Limited Partnership</li> <li>Date of establishment</li> <li>Place of establishment</li> <li>Limited partnership number</li> <li>Registered office address</li> </ul>",
                                                    "calculateValue": "value = {}\n\nif(row.typeOfLegalEntity == 'Limited Partnership'){\nvalue.type = \"Other\";\nvalue.purposesOfUse = [\"GeneralPurpose\"];\nvalue.fields = {\"Notes\": \"Add your note\"};\nvalue.customEvidenceType = component.label;\n}\nelse{\nvalue = ''\n}\n",
                                                    "key": "evd392Js",
                                                    "tags": [
                                                        "EVD"
                                                    ],
                                                    "type": "hidden",
                                                    "input": true,
                                                    "tableView": false
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "customConditional": "show = data.isJointInvestment === 'yes';"
                        },
                        {
                            "label": "Authorisation",
                            "key": "authorisation",
                            "components": [
                                {
                                    "key": "fieldSet11",
                                    "type": "fieldset",
                                    "label": "",
                                    "input": false,
                                    "tableView": false,
                                    "components": [
                                        {
                                            "label": "HTML",
                                            "tag": "div",
                                            "attrs": [
                                                {
                                                    "attr": "",
                                                    "value": ""
                                                }
                                            ],
                                            "content": "Authorisation",
                                            "refreshOnChange": false,
                                            "customClass": "page-title",
                                            "key": "html34",
                                            "type": "htmlelement",
                                            "input": false,
                                            "tableView": false
                                        },
                                        {
                                            "label": "By signing below, the Applicant/s declare that they are applying for the Shares in the Fund on their own behalf and that they are entitled to the Shares in the Fund in respect of which this declaration is made.",
                                            "tableView": false,
                                            "defaultValue": false,
                                            "validate": {
                                                "required": true
                                            },
                                            "key": "aut2",
                                            "logic": [
                                                {
                                                    "name": "Update Checkbox Label",
                                                    "trigger": {
                                                        "type": "simple",
                                                        "simple": {
                                                            "show": true,
                                                            "when": "tabContainerComp.chooseType",
                                                            "eq": "entity"
                                                        }
                                                    },
                                                    "actions": [
                                                        {
                                                            "name": "Update Checkbox Label",
                                                            "type": "property",
                                                            "property": {
                                                                "label": "Label",
                                                                "value": "label",
                                                                "type": "string"
                                                            },
                                                            "text": "By signing below, the Applicant/s declare that they are applying for the Shares in the Company on their own behalf and that they are entitled to the Shares in the Company in respect of which this declaration is made; "
                                                        }
                                                    ]
                                                }
                                            ],
                                            "type": "checkbox",
                                            "input": true
                                        },
                                        {
                                            "legend": "Signer(s) Information",
                                            "customClass": "signer-container",
                                            "key": "fieldSet9",
                                            "logic": [
                                                {
                                                    "name": "Update Signer Container Label",
                                                    "trigger": {
                                                        "type": "javascript",
                                                        "javascript": "var legend = document.querySelector('.signer-container legend');\n\nif(legend && (row.isJointInvestment == 'no' || data.tabContainerComp.isJointInvestment == 'no')){\n  legend.innerHTML = \"Signer Information\"\n}"
                                                    },
                                                    "actions": []
                                                }
                                            ],
                                            "type": "fieldset",
                                            "label": "Field Set",
                                            "input": false,
                                            "tableView": false,
                                            "components": [
                                                {
                                                    "label": "Signers",
                                                    "disableAddingRemovingRows": true,
                                                    "reorder": false,
                                                    "addAnotherPosition": "bottom",
                                                    "layoutFixed": false,
                                                    "enableRowGroups": false,
                                                    "initEmpty": false,
                                                    "hideLabel": true,
                                                    "tableView": false,
                                                    "redrawOn": "data.tabContainerComp.isJointInvestment",
                                                    "clearOnHide": false,
                                                    "customDefaultValue": "if (data.tabContainerComp?.isJointInvestment === 'yes') { value = [{}, {}]; } else { value = [{}]; }",
                                                    "calculateValue": "// Only run when component is ready\nif (!instance) return;\n\n// Desired number of rows\nconst isJoint = data.tabContainerComp?.isJointInvestment === 'yes';\nconst targetRows = isJoint ? 2 : 1;\n\n// Current rows\nconst currentRows = value ? value.length : 0;\n\n// Add rows if needed\nif (currentRows < targetRows) {\n  for (let i = currentRows; i < targetRows; i++) {\n    instance.addRow();\n  }\n}\n\n// Remove extra rows if needed\nif (currentRows > targetRows) {\n  for (let i = currentRows; i > targetRows; i--) {\n    instance.removeRow(i - 1);\n  }\n}",
                                                    "validate": {
                                                        "maxLength": "2",
                                                        "custom": "valid = true; if (data.tabContainerComp?.isJointInvestment === 'yes' && (!input || input.length !== 2)) { valid = 'Joint account holder must have exactly 2 signers'; }"
                                                    },
                                                    "validateWhenHidden": false,
                                                    "key": "signers",
                                                    "type": "datagrid",
                                                    "input": true,
                                                    "components": [
                                                        {
                                                            "label": "Columns",
                                                            "columns": [
                                                                {
                                                                    "components": [
                                                                        {
                                                                            "label": "HTML",
                                                                            "tag": "div",
                                                                            "attrs": [
                                                                                {
                                                                                    "attr": "",
                                                                                    "value": ""
                                                                                }
                                                                            ],
                                                                            "content": "<style>\n.classLegend {\n  font-size: 1rem;\n  background: transparent;\n  color: #000;\n  border: 3px solid rgb(5 11 31 / 60%);\n  font-weight: 600;\n  letter-spacing: 1.1px;\n  padding: 0.2rem 1rem;\n  border-radius: 25px;\n  width: max-content;\n  margin-bottom: 1.5rem;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n</style>\n\n<div class=\"classLegend\">\n  {{\n    (data.tabContainerComp?.isJointInvestment == 'yes')\n      ? (instance.rowIndex == 0 ? 'First Account Holder' : 'Joint Account Holder')\n      : 'Signer'\n  }}\n</div>",
                                                                            "refreshOnChange": true,
                                                                            "customClass": "signer-title",
                                                                            "key": "html1",
                                                                            "type": "htmlelement",
                                                                            "input": false,
                                                                            "tableView": false,
                                                                            "refreshOn": "data.tabContainerComp.isJointInvestment"
                                                                        },
                                                                        {
                                                                            "label": "Columns",
                                                                            "columns": [
                                                                                {
                                                                                    "components": [
                                                                                        {
                                                                                            "label": "First name",
                                                                                            "applyMaskOn": "change",
                                                                                            "customClass": "getVal",
                                                                                            "tableView": true,
                                                                                            "customDefaultValue": "if(instance.rowIndex == 0){\n  value = data.tabContainerComp.first\n}else {\n  value = data.tabContainerComp.firstJs\n}\n",
                                                                                            "calculateValue": "if(instance.rowIndex == 0){\n  value = data.tabContainerComp.first\n}else {\n  value = data.tabContainerComp.firstJs\n}\n",
                                                                                            "allowCalculateOverride": true,
                                                                                            "validate": {
                                                                                                "required": true
                                                                                            },
                                                                                            "validateWhenHidden": false,
                                                                                            "key": "signeeFirst",
                                                                                            "type": "textfield",
                                                                                            "input": true
                                                                                        }
                                                                                    ],
                                                                                    "width": 4,
                                                                                    "offset": 0,
                                                                                    "push": 0,
                                                                                    "pull": 0,
                                                                                    "size": "md",
                                                                                    "currentWidth": 4
                                                                                },
                                                                                {
                                                                                    "components": [
                                                                                        {
                                                                                            "label": "Middle name",
                                                                                            "applyMaskOn": "change",
                                                                                            "tableView": true,
                                                                                            "customDefaultValue": "if(instance.rowIndex == 0){\n  value = data.tabContainerComp.middle\n}else {\n  value = data.tabContainerComp.middleJs\n}\n",
                                                                                            "calculateValue": "if(instance.rowIndex == 0){\n  value = data.tabContainerComp.middle\n}else {\n  value = data.tabContainerComp.middleJs\n}\n",
                                                                                            "allowCalculateOverride": true,
                                                                                            "validateWhenHidden": false,
                                                                                            "key": "middleName",
                                                                                            "type": "textfield",
                                                                                            "input": true
                                                                                        }
                                                                                    ],
                                                                                    "width": 4,
                                                                                    "offset": 0,
                                                                                    "push": 0,
                                                                                    "pull": 0,
                                                                                    "size": "md",
                                                                                    "currentWidth": 4
                                                                                },
                                                                                {
                                                                                    "components": [
                                                                                        {
                                                                                            "label": "Last name",
                                                                                            "applyMaskOn": "change",
                                                                                            "tableView": true,
                                                                                            "customDefaultValue": "if(instance.rowIndex == 0){\n  value = data.tabContainerComp.last\n}else {\n  value = data.tabContainerComp.lastJs\n}\n",
                                                                                            "calculateValue": "if(instance.rowIndex == 0){\n  value = data.tabContainerComp.last\n}else {\n  value = data.tabContainerComp.lastJs\n}\n",
                                                                                            "allowCalculateOverride": true,
                                                                                            "validate": {
                                                                                                "required": true
                                                                                            },
                                                                                            "validateWhenHidden": false,
                                                                                            "key": "signeeLast",
                                                                                            "type": "textfield",
                                                                                            "input": true
                                                                                        }
                                                                                    ],
                                                                                    "size": "md",
                                                                                    "width": 4,
                                                                                    "offset": 0,
                                                                                    "push": 0,
                                                                                    "pull": 0,
                                                                                    "currentWidth": 4
                                                                                },
                                                                                {
                                                                                    "components": [
                                                                                        {
                                                                                            "label": "E-mail",
                                                                                            "applyMaskOn": "change",
                                                                                            "tableView": true,
                                                                                            "case": "lowercase",
                                                                                            "customDefaultValue": "if(instance.rowIndex == 0){\n  value = data.tabContainerComp.email\n}else {\n  value = data.tabContainerComp.contactEmailAddressJs\n}\n",
                                                                                            "calculateValue": "if(instance.rowIndex == 0){\n  value = data.tabContainerComp.email\n}else {\n  value = data.tabContainerComp.contactEmailAddressJs\n}\n",
                                                                                            "allowCalculateOverride": true,
                                                                                            "validate": {
                                                                                                "required": true
                                                                                            },
                                                                                            "validateWhenHidden": false,
                                                                                            "key": "email",
                                                                                            "type": "email",
                                                                                            "input": true
                                                                                        }
                                                                                    ],
                                                                                    "size": "md",
                                                                                    "width": 6,
                                                                                    "offset": 0,
                                                                                    "push": 0,
                                                                                    "pull": 0,
                                                                                    "currentWidth": 6
                                                                                },
                                                                                {
                                                                                    "components": [
                                                                                        {
                                                                                            "label": "Date",
                                                                                            "customClass": "pe-none",
                                                                                            "disabled": true,
                                                                                            "tableView": true,
                                                                                            "customDefaultValue": "var today = new Date();\r\nvar dd = String(today.getDate()).padStart(2, '0');\r\nvar mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!\r\nvar yyyy = today.getFullYear();\r\n\r\ntoday = dd + '/' + mm + '/' + yyyy;\r\nvalue = today;",
                                                                                            "calculateValue": "value = '';\r\n\r\n// today (fallback)\r\nvar today = new Date();\r\nvar dd = String(today.getDate()).padStart(2, '0');\r\nvar mm = String(today.getMonth() + 1).padStart(2, '0');\r\nvar yyyy = today.getFullYear();\r\nvar todayFormatted = dd + '/' + mm + '/' + yyyy;\r\n\r\nif (row.signeeFirst && row.signeeLast) {\r\n  value = todayFormatted;\r\n\r\n  if (data?.MID_Config?.contractSigners?.length) {\r\n    const signer = data.MID_Config.contractSigners.find(\r\n      s => s.email === row.email && s.signedOn\r\n    );\r\n\r\n    if (signer) {\r\n      const d = new Date(Number(signer.signedOn));\r\n      value = [\r\n        String(d.getDate()).padStart(2, '0'),\r\n        String(d.getMonth() + 1).padStart(2, '0'),\r\n        d.getFullYear()\r\n      ].join('/');\r\n    }\r\n  }\r\n}\r\n",
                                                                                            "key": "signingDate",
                                                                                            "type": "textfield",
                                                                                            "input": true
                                                                                        }
                                                                                    ],
                                                                                    "size": "md",
                                                                                    "width": 6,
                                                                                    "offset": 0,
                                                                                    "push": 0,
                                                                                    "pull": 0,
                                                                                    "currentWidth": 6
                                                                                }
                                                                            ],
                                                                            "key": "columns2",
                                                                            "type": "columns",
                                                                            "input": false,
                                                                            "tableView": false
                                                                        },
                                                                        {
                                                                            "label": "Role",
                                                                            "widget": "choicesjs",
                                                                            "customClass": "hide-this-field",
                                                                            "tableView": true,
                                                                            "data": {
                                                                                "values": [
                                                                                    {
                                                                                        "label": "Filler",
                                                                                        "value": "filler"
                                                                                    },
                                                                                    {
                                                                                        "label": "Signer",
                                                                                        "value": "signer"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "customDefaultValue": "value = 'signer'",
                                                                            "calculateValue": "value = 'signer'",
                                                                            "allowCalculateOverride": true,
                                                                            "validate": {
                                                                                "required": true
                                                                            },
                                                                            "key": "role",
                                                                            "type": "select",
                                                                            "input": true
                                                                        },
                                                                        {
                                                                            "label": "Action",
                                                                            "widget": "choicesjs",
                                                                            "customClass": "hide-this-field",
                                                                            "tableView": true,
                                                                            "data": {
                                                                                "values": [
                                                                                    {
                                                                                        "label": "Add",
                                                                                        "value": "add"
                                                                                    },
                                                                                    {
                                                                                        "label": "Remove",
                                                                                        "value": "remove"
                                                                                    },
                                                                                    {
                                                                                        "label": "Modify",
                                                                                        "value": "modify"
                                                                                    }
                                                                                ]
                                                                            },
                                                                            "customDefaultValue": "value = 'add'",
                                                                            "calculateValue": "value = 'add'",
                                                                            "allowCalculateOverride": true,
                                                                            "validate": {
                                                                                "required": true
                                                                            },
                                                                            "key": "action",
                                                                            "type": "select",
                                                                            "input": true
                                                                        }
                                                                    ],
                                                                    "width": 12,
                                                                    "offset": 0,
                                                                    "push": 0,
                                                                    "pull": 0,
                                                                    "size": "md",
                                                                    "currentWidth": 12
                                                                },
                                                                {
                                                                    "components": [
                                                                        {
                                                                            "key": "fieldSet34",
                                                                            "type": "fieldset",
                                                                            "label": "",
                                                                            "input": false,
                                                                            "tableView": false,
                                                                            "components": [
                                                                                {
                                                                                    "label": "Index",
                                                                                    "customDefaultValue": "value = instance.rowIndex + 1",
                                                                                    "calculateValue": "value = instance.rowIndex + 1",
                                                                                    "key": "index",
                                                                                    "type": "hidden",
                                                                                    "input": true,
                                                                                    "tableView": false
                                                                                },
                                                                                {
                                                                                    "label": "Signature",
                                                                                    "placeholder": "Start typing your name...",
                                                                                    "applyMaskOn": "change",
                                                                                    "customClass": "sign",
                                                                                    "hideLabel": true,
                                                                                    "tableView": true,
                                                                                    "customDefaultValue": "const first = row.signeeFirst || \"\";\nconst last = row.signeeLast || \"\";\nvalue = `${first} ${last}`.trim()\n",
                                                                                    "calculateValue": "const first = row.signeeFirst || \"\";\nconst last = row.signeeLast || \"\";\nvalue = `${first} ${last}`.trim()\n",
                                                                                    "allowCalculateOverride": true,
                                                                                    "validateWhenHidden": false,
                                                                                    "key": "signature",
                                                                                    "type": "textfield",
                                                                                    "input": true
                                                                                },
                                                                                {
                                                                                    "label": "HTML",
                                                                                    "tag": "div",
                                                                                    "attrs": [
                                                                                        {
                                                                                            "attr": "",
                                                                                            "value": ""
                                                                                        }
                                                                                    ],
                                                                                    "content": "<div class=\"top bottom left box\">\r\n      <div class=\"div-title\">\r\n        <div style=\"opacity:0.7; font-weight:700;\">Mesh ID verified signature</div>\r\n       \r\n      </div>\r\n    <h1 class =\"custom-sign\">{{row.signature}}</h1>\r\n    </div>\r\n    <img class=\"img\" src=\"https://i.postimg.cc/hjg5n8jR/stamp-3x.png\" alt=\"\">\r\n    ",
                                                                                    "refreshOnChange": true,
                                                                                    "key": "customSignField",
                                                                                    "type": "htmlelement",
                                                                                    "input": false,
                                                                                    "tableView": false
                                                                                },
                                                                                {
                                                                                    "label": "<i class=\"fa-solid fa-arrow-rotate-right\"></i> Change the signature style",
                                                                                    "action": "event",
                                                                                    "showValidations": false,
                                                                                    "customClass": "generate",
                                                                                    "hidden": true,
                                                                                    "tableView": false,
                                                                                    "key": "generate",
                                                                                    "type": "button",
                                                                                    "input": true
                                                                                }
                                                                            ]
                                                                        }
                                                                    ],
                                                                    "width": 12,
                                                                    "offset": 0,
                                                                    "push": 0,
                                                                    "pull": 0,
                                                                    "size": "md",
                                                                    "currentWidth": 12
                                                                }
                                                            ],
                                                            "hideLabel": true,
                                                            "key": "columns",
                                                            "type": "columns",
                                                            "input": false,
                                                            "tableView": false
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "label": "Review and Sign",
                                            "showValidations": false,
                                            "size": "lg",
                                            "customClass": "review shadow-none text-center ",
                                            "disableOnInvalid": true,
                                            "tableView": false,
                                            "key": "submit",
                                            "type": "button",
                                            "input": true,
                                            "saveOnEnter": false
                                        }
                                    ]
                                }
                            ]
                        }