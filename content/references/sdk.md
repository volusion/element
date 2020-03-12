---
title: 'SDK'
---

This document looks at the ways that you can use `window.ElementSdk.client` to call the Volusion API.

## Calling the Sdk

In production block code, the most common place that you'll be using the SDK is in `getDataProps.js`

```javascript
export const getDataProps = (utils, { productSlug }) => {
  return utils.client.products.getBySlug(productSlug).catch(() => {})
}
```

See [How to Read Page URI Parameters from Your Block](how-to/read-page-uri-parameters-in-blocks) for more background behind that example.

**Tip**: To explore the SDK locally from a block's `local/index.js` file, or from your browser's javascript console from a store running on Element, try this:

```javascript
window.ElementSdk.client.categories
  .get()
  .then(console.log)
  .catch(console.error)
```

## 'ElementSdk.client' Methods and Properties

### Table of Contents

- [Categories](#categories)
  - [`categories.get()`](<#'categories.get()'>)
- [Content Pages](#contentpages)
  - [`contentPages.getBySeoFriendlyName()`](<#'contentpages.getbyseofriendlyname()'>)
- [Menus](#menus)
  - [`menus.get()`](#menusget)
- [Products](#products)
  - [`products.getById()`](#productsgetbyid)
  - [`products.getBySlug()`](#productsgetbyslug)
  - [`products.getRelatedById()`](#productsgetrelatedbyid)
  - [`products.getRelatedBySlug()`](#productsgetrelatedbyslug)
  - [`products.getByCategoryId()`](#productsgetbycategoryid)
  - [`products.getWithChildCategories()`](#productsgetwithchildcategories)
  - [`products.search()`](#productssearch)
- [Request](#request)
- [Store Information](#store-information)
  - [`storeInformation`](#storeinformation)
- [Tenant ID](#tenant-id)
  - [`tenant`](#tenant)

### Categories

#### 'categories.get()'

A method that returns a Promise that resolves with an array of the configured store's categories.

#### Usage

```javascript
utils.client.categories.get()
```

#### Response

```javascript
;[
  {
    contentPageId: '',
    descriptions: {
      short: '',
      long: '',
      extended: '',
    },
    id: '123',
    images: [],
    name: 'Category 1',
    productCount: 5,
    seo: {
      title: '',
      metaDescription: '',
      friendlyName: '',
    },
    state: 'Active',
    subCategories: [],
  },
  {
    contentPageId: '',
    descriptions: {
      short: '',
      long: '',
      extended: '',
    },
    id: '456',
    images: [],
    name: 'Category 2',
    productCount: 3,
    seo: {
      title: '',
      metaDescription: '',
      friendlyName: '',
    },
    state: 'Active',
    subCategories: [],
  },
]
```

### Content Pages

Older stores have pages outside of Element. Manage them from [Volusion Admin Pages](https://admin.volusion.com/pages/list).

#### 'contentPages.getBySeoFriendlyName()'

A method that returns a Promise that resolves with the data for the given Content Page SEO Friendly Name (slug).

#### Usage

```javascript
utils.client.contentPages.getBySeoFriendlyName('page-name')
```

#### Response

```javascript
{
    "content": "<p>HTML Page</p>",
    "createdOn": "", // iso date string
    "id": "",
    "name": "Page Name",
    "seo": {
        "friendlyName": "page-name",
        "metaDescription": "",
        "modifier": 0,
        "title": ""
    },
    "updatedOn": "" // iso date string
}
```

### Menus

#### 'menus.get()'

A method that returns a Promise that resolves with an object with an `items` property that contains array of the configured store's menus. **Note:** the Volusion Admin interface only supports a single menu at this time.

#### Usage

```javascript
utils.client.menus.get()
```

#### Response

```javascript
{
    "items": [{
        "createdOn": "",  // iso date string
        "id": "",
        "items": [{
            "id": "",
            "items": [],
            "name": "",
            "slug": "",
            "type": "" // types include 'category', 'product', 'page', 'elementPage', and 'link'
        }, {
            "id": "",
            "items": [],
            "name": "",
            "url": "https://",
            "type": "link"
        }],
        "updatedOn": "" // iso date string
    }]
}
```

**Note:** menu item will have a `url` if it is of `type` `"link"`, otherwise it will have a slug.

### Products

#### 'products.getById()'

A method that returns a Promise that resolves with the data for the given Product ID.

#### Usage

```javascript
utils.client.products.getById('product123')
```

#### Response

```javascript
{
    "availability": {},
    "categoryIds": [],
    "id": "",
    "images": [],
    "listPrice": 1,
    "name": "",
    "price": 1,
    "productVariants": [{
        "id": "",
        "images": [],
        "isInventoryTracked": false,
        "price": 1,
        "quantity": 0,
        "sku": "",
        "variants": []
    }],
    "relatedProductIds": [],
    "seo_friendlyName": "",
    "seo_metaDescription": "",
    "seo_title": "",
    "sku": "",
    "variantOptions": []
}
```

#### 'products.getBySlug()'

A method that returns a Promise that resolves with the data for the given Product SEO Friendly Name (slug).

#### Usage

```javascript
utils.client.products.getBySlug('product-name')
```

#### Response

```javascript
{
    "availability": {},
    "categoryIds": [],
    "id": "",
    "images": [],
    "listPrice": 1,
    "name": "",
    "price": 1,
    "productVariants": [{
        "id": "",
        "images": [],
        "isInventoryTracked": false,
        "price": 1,
        "quantity": 0,
        "sku": "",
        "variants": []
    }],
    "relatedProductIds": [],
    "seo_friendlyName": "",
    "seo_metaDescription": "",
    "seo_title": "",
    "sku": "",
    "variantOptions": []
}
```

#### 'products.getRelatedById()'

A method that returns a Promise that resolves with an array of related products for the given Product ID.

#### Usage

```javascript
utils.client.products.getRelatedById('product123')
```

#### Response

```javascript
;[
  {
    id: '',
    images: [],
    listPrice: 1,
    name: '',
    productVariants: [
      {
        id: '',
        isInventoryTracked: false,
        price: 1,
        quantity: 0,
      },
    ],
    salePrice: null,
    seo_friendlyName: '',
  },
  {
    id: '',
    images: [],
    listPrice: 1,
    name: '',
    productVariants: [
      {
        id: '',
        isInventoryTracked: false,
        price: 1,
        quantity: 0,
      },
    ],
    salePrice: null,
    seo_friendlyName: '',
  },
]
```

#### 'products.getRelatedBySlug()'

A method that returns a Promise that resolves with an array of related products for the given Product SEO Friendly Name (slug).

#### Usage

```javascript
utils.client.products.getRelatedBySlug('product-name')
```

#### Response

```javascript
;[
  {
    id: '',
    images: [],
    listPrice: 1,
    name: '',
    productVariants: [
      {
        id: '',
        isInventoryTracked: false,
        price: 1,
        quantity: 0,
      },
    ],
    salePrice: null,
    seo_friendlyName: '',
  },
  {
    id: '',
    images: [],
    listPrice: 1,
    name: '',
    productVariants: [
      {
        id: '',
        isInventoryTracked: false,
        price: 1,
        quantity: 0,
      },
    ],
    salePrice: null,
    seo_friendlyName: '',
  },
]
```

#### 'products.getByCategoryId()'

A method that returns a Promise that resolves with an array of related products for the given category ID.

#### Usage

```javascript
utils.client.products.getByCategoryId({ categoryId: 'category123' })
```

#### Advanced Usage

```javascript
utils.client.products.getByCategoryId({
  categoryId: 'category123',
  page: 1, // one based
  pageSize: 20,
  offset: 0, // alternative to page, uses pageSize, but not calculated based on it
  sort: 'name a-z', // See Product Sort Options at the bottom of this document.
})
```

Note: `page` will be used if both `page` and `offset` are present.

#### Response

```javascript
;[
  {
    availability: {
      preOrder: {
        enabled: false,
      },
    },
    categoryIds: ['category123'],
    description: '',
    id: '',
    images: [],
    listPrice: 1,
    name: '',
    price: 1,
    productVariants: [
      {
        id: '',
        images: [],
        isInventoryTracked: false,
        price: 1,
        quantity: 0,
        sku: '',
        variants: [],
      },
    ],
    relatedProductIds: [],
    seo_friendlyName: '',
    seo_metaDescription: '',
    seo_title: '',
    sku: '',
    variantOptions: [],
  },
  {
    availability: {
      preOrder: {
        enabled: false,
      },
    },
    categoryIds: ['category123'],
    description: '',
    id: '',
    images: [],
    listPrice: 1,
    name: '',
    price: 1,
    productVariants: [
      {
        id: '',
        images: [],
        isInventoryTracked: false,
        price: 1,
        quantity: 0,
        sku: '',
        variants: [],
      },
    ],
    relatedProductIds: [],
    seo_friendlyName: '',
    seo_metaDescription: '',
    seo_title: '',
    sku: '',
    variantOptions: [],
  },
]
```

#### 'products.getWithChildCategories()'

A synchronous method that returns an array with the given category and any subcategories it might have, if passed a category ID and the store's entire category tree (the response from [`categories.get()`](#categoriesget)).

#### Usage

```javascript
utils.client.products.getWithChildCategories('category123', categoryTree)
```

#### Response

```javascript
;['category123', 'category123-subcategory']
```

#### 'products.search()'

An asynchronous method that returns a Promise that resolves with an array with products matching the given query, as well as pagination data

#### Usage

```javascript
utils.client.products.search({
  query: 'Test', // required
  page: 1, // one-based, calculated based on pageSize
  pageSize: 20,
  offset: 0, // alternative to page, uses pageSize, but not calculated based on it
  sort: 'newest', // see Product Sort Options at the bottom of this document
})
```

Note: `page` will be used if both `page` and `offset` are present.

#### Response

```javascript
{
    currentPage: 1,
    totalItems: 2,
    totalPages: 1,
    items: [
        {
            "availability": {
                "preOrder": {
                    "enabled": false
                }
            },
            "categoryIds": [""],
            "description": "",
            "id": "",
            "images": [],
            "listPrice": 1,
            "name": "Test Product",
            "price": 1,
            "productVariants": [{
                "id": "",
                "images": [],
                "isInventoryTracked": false,
                "price": 1,
                "quantity": 0,
                "sku": "",
                "variants": []
            }],
            "relatedProductIds": [],
            "seo_friendlyName": "",
            "seo_metaDescription": "",
            "seo_title": "",
            "sku": "",
            "variantOptions": []
        }, {
            "availability": {
                "preOrder": {
                    "enabled": false
                }
            },
            "categoryIds": [""],
            "description": "",
            "id": "",
            "images": [],
            "listPrice": 1,
            "name": "Product Test",
            "price": 1,
            "productVariants": [{
                "id": "",
                "images": [],
                "isInventoryTracked": false,
                "price": 1,
                "quantity": 0,
                "sku": "",
                "variants": []
            }],
            "relatedProductIds": [],
            "seo_friendlyName": "",
            "seo_metaDescription": "",
            "seo_title": "",
            "sku": "",
            "variantOptions": []
        }
    ]
}
```

### Request

An asynchronous function that behaves exactly like [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), returning a promise that resolves with a response from a third party API endpoint.

#### Usage

```javascript
utils.client
  .request('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .catch(e => [])
```

**TIP:** always use this when [calling third party services](/how-to/data-third-party-services) so that your block behaves consistently when rendered by the server or on the client-side.

### Store Information

#### 'storeInformation'

A property with an object value containing details about the configured store.

#### Usage

```javascript
utils.client.storeInformation
```

#### Response

```javascript
{
    "acceptsStripeAsPayment": false,
    "launched": false,
    "name": "Test Store",
    "seo": {
        "metaDescription": "",
        "metaTitle": "",
        "platformMetaTags": {
            "google": ""
        }
    },
    "socialNetworks": {
        "instagram": ""
    },
    "storeUrl": "",
    "tenant": "",
    "thirdPartyIntegrations": {
        "addThisEnabled": false
    },
    "applePay": {
        "isEnabled": false
    },
    "paypal": {
        "isEnabled": false,
        "primaryEmailConfirmed": false
    },
    "logo": {
        "imagePath": "",
        "uriBase": ""
    }
}
```

### Tenant ID

#### 'tenant'

A property with a string value containing the configured store's tenant ID.

#### Usage

```javascript
utils.client.tenant
```

#### Response

```javascript
'58533e0d3b77c800172ca14e'
```

## Additional Notes

### Product Sort Options

- `"lowest price"`
- `"highest price"`
- `"newest"`
- `"name z-a"`
- `"name a-z"`
