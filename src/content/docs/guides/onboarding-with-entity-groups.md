---
title: Onboarding with Entity Groups
section: guides
description: TBD
---

This use case will provide an overview of Entity Groups and how to provide Entity Group information to the Journeys API. 

Entity Group is a new record type, which can be used to associate multiple Person and Business Entities together at the point of onboarding and update throughout the entity lifecycle. The primary purpose of Entity Groups is to create data/relationships to enable decisioning across multiple entities. Entity Groups serve as the connective value that each Person and Business Entity can have a relationship to and each relationship will support contextual values (see [below](https://developer.alloy.com/public/docs/onboarding-with-entity-groups#/entity-group-relationship-fields)).

## Request Overview

Alloy's Journeys APIs support creating Entity Groups when evaluating entities at the point of onboarding. When a multi-entity journey is created, Alloy will automatically create a new Entity Group object. All Entity Group fields are optional but strongly recommended to provide so that they can be leveraged in policy.

### Entity Group Fields

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        entity\_group\_token
      </td>

      <td>
        string
      </td>

      <td>
        Alloy-defined Entity Group identifier that can be used to update existing Entity Groups. The Entity Group Token is assigned as soon as a new Entity record is created in Alloy’s system.
      </td>
    </tr>

    <tr>
      <td>
        external\_entity\_group\_id
      </td>

      <td>
        string
      </td>

      <td>
        Client-defined Entity Group identifier that should be provided when providing new Entity Group information for the first time. Can also be used interchangeably with Entity Group Tokens to update existing Entity Groups.

        *Recommended when creating a new Entity Group*
      </td>
    </tr>

    <tr>
      <td>
        entity\_group\_name
      </td>

      <td>
        string
      </td>

      <td>
        Name or description of the Entity Group and the related Entities

        *Recommended when creating a new Entity Group*
      </td>
    </tr>

    <tr>
      <td>
        entity\_group\_type
      </td>

      <td>
        string
      </td>

      <td>
        Standardized type value for each Entity Group

        **Supported Values**: `business`, `merchant`, `joint_account`, `membership`

        *Recommended when creating a new Entity Group*
      </td>
    </tr>
  </tbody>
</Table>

### Entity Group Relationship Data Fields

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        roles
      </td>

      <td>
        array
      </td>

      <td>
        Designate the Entity role in relation to the Entity Group.

        **Supported Values**: `primary`, `shareholder`, `secondary`, `beneficiary`, `beneficial_owner`, `control_prong`, `director`, `authorized_signer`, `principal_owner`, `coborrower`, `joint`, `guarantor`
      </td>
    </tr>

    <tr>
      <td>
        title
      </td>

      <td>
        string
      </td>

      <td>
        If relevant, the Entity's title related to the Entity Group (e.g., Chief Financial Officer, Primary Account Holder)
      </td>
    </tr>

    <tr>
      <td>
        ownership\_percentage
      </td>

      <td>
        string
      </td>

      <td>
        The whole number percentage value of an Entity's ownership of a business Entity Group. Supports values 0-100.
      </td>
    </tr>
  </tbody>
</Table>

Some information to keep in mind for each Entity Group / Entity Group Relationship:

* Each Entity Group must have a primary entity. For KYB/pKYB the primary entity should be a business entity.
* Entity Groups can be used to hydrate entity information into the representatives array in journeys so that clients do not need to provide entity information more than once on the journey request. Person information will hydrate into the representatives array when the entity has one or more roles that are classified as a representative role. These roles are taken from the existing supported types on representatives.
  * Supported representative roles: `director`, `authorized_signer`, `principal_owner`, `coborrower`, `joint`, `guarantor`

### Sample Journeys Payload (new Entity Group)

```json
{
  "external_entity_group_id": "a43fc268-f03d-4026-908e-80423cf09dae",
  "entity_group_name": "Jane's Biscuit Co.",
  "entity_group_type": "business",
  "do_await_additional_entities": false,
  "application_meta": {
    "newKey": "New Value"
  },
  "entities": [
    {
      "entity_type": "business",
      "branch_name": "businesses",
      "external_entity_id": "business_1",
      "data": {
        "addresses": [
          {
            "type": "business_primary",
            "line_1": "95 East Road",
            "city": "Town",
            "postal_code": "CD123",
            "country_code": "GB"
          }
        ],
        "meta": {
          "newKey": "New Value"
        },
        "business_name": "Blloy",
        "business_registry_id": "123234123",
        "business_phone_number": "5557654321",
        "entity_group_relationship_data": {
          "roles": ["primary"]
        }
      }
    },
    {
      "entity_type": "person",
      "branch_name": "persons",
      "external_entity_id": "person_1",
      "data": {
        "addresses": [
          {
            "type": "primary",
            "line_1": "123 Main Street",
            "city": "City",
            "postal_code": "AB123",
            "country_code": "GB"
          }
        ],
        "name_first": "John",
        "name_last": "Doe",
        "birth_date": "1990-01-01",
        "email_address": "john@doe.com",
        "phone_number": "5551234567",
        "entity_group_relationship_data": {
          "roles": ["director", "principal_owner"],
          "title": "CEO",
          "ownership_percentage": "50"
        },
        "meta": {
          "newKey": "New Value"
        }
      }
    }
  ]
}

```

## Response Overview

### Entity Group Object within Journeys

```json
{
  ...
  "_embedded": {
    "entity_group": {
      "token": "EG-HP4d05nlZRgbw215x7Pk",
      "name": "New Business 1",
      "type": "business"
    },
	...
  }
  ...
}

```

<br />