export const rolePermissions = {

    fleet_manager: [

        "/dashboard",
        "/dashboard/vehicles",
        "/dashboard/drivers",
        "/dashboard/trips",
        "/dashboard/maintenance",
        "/dashboard/fuel",
        "/dashboard/analytics",
        "/dashboard/settings"

    ],

    dispatcher: [

        "/dashboard",
        "/dashboard/vehicles",
        "/dashboard/drivers",
        "/dashboard/trips"

    ],

    safety_officer: [

        "/dashboard",
        "/dashboard/vehicles",
        "/dashboard/trips",
        "/dashboard/maintenance"

    ],

    financial_analyst: [

        "/dashboard",
        "/dashboard/fuel",
        "/dashboard/analytics"

    ]

};