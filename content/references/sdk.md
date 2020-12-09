---
title: 'Element SDK Client'
metaTitle: 'Element SDK Client'
metsDescription: 'This reference examines ways you can use window.ElementSdk.client to call the Volusion API.'
---

This document examines ways you can use `window.ElementSdk.client` to call the Volusion API.

## Calling the SDK

In production block code, the most common place that you'll be using the SDK is in `getDataProps.js`

```javascript
export const getDataProps = (utils, { productSlug }) => {
  return utils.client.products.getBySlug(productSlug).catch(() => {})
}
```

See "[Read Page URI Parameters In Blocks](how-to/read-page-uri-parameters-in-blocks)" for more background.

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
  - [`categories.getById()`](<#'categories.getbyid()'>)
  - [`categories.getBySlug()`](<#'categories.getbyslug()'>)
- [Content Pages](#contentpages)
  - [`contentPages.getBySeoFriendlyName()`](<#'contentpages.getbyseofriendlyname()'>)
- [Menus](#menus)
  - [`menus.get()`](<#'menus.get()'>)
- [Products](#products)
  - [`products.getById()`](<#'products.getbyid()'>)
  - [`products.getBySlug()`](<#'products.getbyslug()'>)
  - [`products.getByCategorySlug()`](<#'products.getbycategoryslug()'>)
  - [`products.getRelatedById()`](<#'products.getrelatedbyid()'>)
  - [`products.getRelatedBySlug()`](<#'products.getrelatedbyslug()'>)
  - [`products.getByCategoryId()`](<#'products.getbycategoryid()'>)
  - [`products.getWithChildCategories()`](<#'products.getwithchildcategories()'>)
  - [`products.search()`](<#'products.search()'>)
- [Request](#request)
- [Store Information](#storeinformation)
  - [`storeInformation`](#'storeinformation')
- [Tenant ID](#tenantid)
  - [`tenant`](#'tenant')

### Categories

#### 'categories.get()'

This method returns a Promise that resolves with an array of the configured store's categories.

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

#### 'categories.getById()'

This method returns a Promise that resolves with an object containing the category details including children and parent categories.

#### Usage

```javascript
utils.client.categories.getById('123')
```

#### Response

```javascript
{
    contentPageId: '',
    descriptions: {
      short: '',
      long: '',
      extended: '',
    },
    id: '345',
    images: [],
    name: 'Category 1',
    productCount: 5,
    seo: {
      title: '',
      metaDescription: '',
      friendlyName: '',
    },
    state: 'Active',
    parentCategories: [
            {
              state: 'Active',
              id: '123',
              images: [],
              name: 'parentcategory1',
              parentId: '123',
              productCount: 1,
              contentPageId: '',
              descriptions: {
                  short: '',
                  long: '',
                  extended: ''
              },
              seo: {
                  title: 'parentcategory1',
                  metaDescription: '',
                  friendlyName: 'parentcategory1'
              }
            }
        ],
    subCategories: [
        {
          state: 'Active',
          id: '678',
          images: [],
          subCategories: [
              {
                  state: 'Active',
                  id: '91011',
                  images: [],
                  subCategories: [],
                  name: 'SubCategory 2',
                  parentId: '678',
                  productCount: 1,
                  contentPageId: '',
                  descriptions: {
                      short: '',
                      long: '',
                      extended: ''
                  },
                  seo: {
                      title: '',
                      metaDescription: '',
                      friendlyName: ''
                  }
              }
          ],
          name: 'subcategory1',
          parentId: '345',
          productCount: 1,
          contentPageId: '',
          descriptions: {
              short: '',
              long: '',
              extended: ''
          },
          seo: {
              title: 'subcategory1',
              metaDescription: '',
              friendlyName: 'subcategory1'
          }
        }
    ],
}
```

#### 'categories.getBySlug()'

This method returns a Promise that resolves with an object containing the category details including children and parent categories.

#### Usage

```javascript
utils.client.categories.getBySlug('category-slug')
```

#### Response

```javascript
{
    contentPageId: '',
    descriptions: {
      short: '',
      long: '',
      extended: '',
    },
    id: '345',
    images: [],
    name: 'Category 1',
    productCount: 5,
    seo: {
      title: '',
      metaDescription: '',
      friendlyName: '',
    },
    state: 'Active',
    parentCategories: [
            {
              state: 'Active',
              id: '123',
              images: [],
              name: 'parentcategory1',
              parentId: '123',
              productCount: 1,
              contentPageId: '',
              descriptions: {
                  short: '',
                  long: '',
                  extended: ''
              },
              seo: {
                  title: 'parentcategory1',
                  metaDescription: '',
                  friendlyName: 'parentcategory1'
              }
            }
        ],
    subCategories: [
        {
          state: 'Active',
          id: '678',
          images: [],
          subCategories: [
              {
                  state: 'Active',
                  id: '91011',
                  images: [],
                  subCategories: [],
                  name: 'SubCategory 2',
                  parentId: '678',
                  productCount: 1,
                  contentPageId: '',
                  descriptions: {
                      short: '',
                      long: '',
                      extended: ''
                  },
                  seo: {
                      title: '',
                      metaDescription: '',
                      friendlyName: ''
                  }
              }
          ],
          name: 'subcategory1',
          parentId: '345',
          productCount: 1,
          contentPageId: '',
          descriptions: {
              short: '',
              long: '',
              extended: ''
          },
          seo: {
              title: 'subcategory1',
              metaDescription: '',
              friendlyName: 'subcategory1'
          }
        }
    ],
}
```

### Content Pages

Older stores have pages outside of Element. You can manage them from [Volusion Admin Pages](https://admin.volusion.com/pages/list).

#### 'contentPages.getBySeoFriendlyName()'

This method returns a Promise that resolves with the data for the given Content Page SEO Friendly Name (slug).

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

This method returns a Promise that resolves with an object with an `items` property that contains an array of the configured store's menus. **Note:** the Volusion Admin interface only supports a single menu at this time.

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

**Note:** the menu item will have a `url` if it is of `type` `"link"`, otherwise it will have a slug.

### Products

#### 'products.getById()'

This method returns a Promise that resolves with the data for the given Product ID.

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

This method returns a Promise that resolves with the data for the given Product SEO Friendly Name (slug).

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

This method returns a Promise that resolves with an array of related products for the given Product ID.

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

This method returns a Promise that resolves with an array of related products for the given Product SEO Friendly Name (slug).

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

This method returns a Promise that resolves with an array of related products for the given category ID.

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

#### 'products.getByCategorySlug()'

This method returns a Promise that resolves with an object containing product items and pagination information.

#### Usage

```javascript
utils.client.products.getByCategorySlug({ slug: 'category123' })
```

#### Advanced Usage

```javascript
utils.client.products.getByCategorySlug({
  slug: 'category123',
  page: 1, // one based
  pageSize: 20, // default 20
})
```

#### Response

```javascript
{
  currentPage: 1,
  items: [
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
         ],
  totalItems: 2,
  totalPages: 1
}
```

Note: If there're no products for a given category or there is no category by the given slug, an empty array will be returned for `items`.

#### 'products.getWithChildCategories()'

This synchronous method returns an array with the given category and any subcategories it might have, if it has passed a category ID and the store's entire category tree (the response from [`categories.get()`](#categoriesget)).

#### Usage

```javascript
utils.client.products.getWithChildCategories('category123', categoryTree)
```

#### Response

```javascript
;['category123', 'category123-subcategory']
```

#### 'products.search()'

This asynchronous method returns a Promise that resolves with an array of products matching the given query, as well as pagination data

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

This asynchronous function behaves exactly like [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), returning a promise that resolves with a response from a third-party API endpoint.

**TIP:** always use this when [calling third-party services](/how-to/data-third-party-services) so that your block behaves consistently when rendered by the server or on the client side.

#### Usage

##### Standard Usage:
```javascript
utils.client
  .request('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .catch(e => [])
```

##### With Custom Options:
For advanced configuration, the `request` util takes an optional second argument containing an options object. `utils.client.request` can accept any of the [options accepted](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/560c921e8b9ddec7a50a6d57793a0211ea696d81/types/node-fetch/index.d.ts#L46-L62) by [`node-fetch`](https://github.com/node-fetch/node-fetch).


```javascript
utils.client
  .request('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(e => [])
```


### Store Information

#### 'storeInformation'

This property has an object value containing details about the configured store.

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

This property has a string value containing the configured store's tenant ID.

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
