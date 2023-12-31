{
    "openapi": "3.0.3",
    "info": {
      "title": "BrasilSeg API",
      "description": "Brasilseg's project aims to develop a backend system and an API that will be used by the partner to support the insurance operations negotiated by the company.\n\n This documentation presents the endpoints present in the API.",
      "version": "0.0.1"
    },
    "servers": [
      {
        "url": "https://api.visionaplatform.com/segpar/v0"
      }
    ],
    "tags": [
      {
        "name": "Pré-seguro",
        "description": "Pré-seguro description ..."
      },
      {
        "name": "Pós-seguro",
        "description": "Pós-seguro description ..."
      }
    ],
    "paths": {
      "/preseguro": {
        "post": {
          "tags": [
            "Pré-seguro"
          ],
          "summary": "Description..",
          "description": "Description..",
          "operationId": "preseguroId",
          "requestBody": {
            "description": "Retorna em formato JSON",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FeatureCollectionRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FeatureCollectionResponse"
                  }
                }
              }
            },
            "405": {
              "description": "Invalid input"
            }
          },
          "security": [
            {
              "Authorization": []
            }
          ]
        }
      },
      "/posseguro/cadastramento": {
        "post": {
          "tags": [
            "Pós-seguro"
          ],
          "summary": "Description..",
          "description": "Description..",
          "requestBody": {
            "description": "Retorna em formato JSON",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CadastramentoRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Successful operation"
            },
            "405": {
              "description": "Invalid input"
            }
          },
          "security": [
            {
              "Authorization": []
            }
          ]
        }
      },
      "/posseguro/cancelamento": {
        "post": {
          "tags": [
            "Pós-seguro"
          ],
          "summary": "Description..",
          "description": "Description..",
          "requestBody": {
            "description": "Retorna em formato JSON",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CancelamentoRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Successful operation"
            },
            "405": {
              "description": "Invalid input"
            }
          },
          "security": [
            {
              "Authorization": []
            }
          ]
        }
      }
    },
    "components": {
      "schemas": {
        "FeatureCollectionRequest": {
          "description": "GeoJSon 'FeatureCollection' object",
          "externalDocs": {
            "url": "https://tools.ietf.org/html/rfc7946#section-3.3"
          },
          "allOf": [
            {
              "type": "object",
              "required": [
                "features",
                "id",
                "type",
                "properties"
              ],
              "properties": {
                "id": {
                  "type": "number",
                  "example": 1
                },
                "type": {
                  "type": "string",
                  "enum": [
                    "FeatureCollection"
                  ]
                },
                "properties": {
                  "type": "object",
                  "required": [
                    "cod_municipio"
                  ],
                  "properties": {
                    "cod_municipio": {
                      "type": "number",
                      "example": 4304507
                    },
                    "uf_declarada": {
                      "type": "number",
                      "example": 43
                    },
                    "cultura": {
                      "type": "string",
                      "example": "soja"
                    },
                    "ano_safra": {
                      "type": "string",
                      "example": "cultura"
                    }
                  }
                },
                "features": {
                  "type": "array",
                  "maxItems": 5,
                  "items": {
                    "$ref": "#/components/schemas/FeatureRequest"
                  }
                }
              }
            }
          ]
        },
        "FeatureCollectionResponse": {
          "description": "GeoJSon 'FeatureCollection' object",
          "externalDocs": {
            "url": "https://tools.ietf.org/html/rfc7946#section-3.3"
          },
          "allOf": [
            {
              "type": "object",
              "properties": {
                "id": {
                  "type": "number",
                  "example": 1
                },
                "type": {
                  "type": "string",
                  "enum": [
                    "FeatureCollection"
                  ]
                },
                "properties": {
                  "type": "object",
                  "properties": {
                    "cep_municipio": {
                      "type": "string",
                      "example": " 97930000"
                    },
                    "prod_media": {
                      "type": "number",
                      "example": 310.9573358318662
                    },
                    "area_calculada": {
                      "type": "string",
                      "example": " 200.1682863766916"
                    },
                    "intersec_muni": {
                      "type": "number",
                      "example": 100
                    },
                    "intersec_ibama": {
                      "type": "number",
                      "example": 0
                    },
                    "intersec_icmbio": {
                      "type": "number",
                      "example": 0
                    },
                    "intersec_uc": {
                      "type": "number",
                      "example": 0
                    },
                    "intersec_tindigs": {
                      "type": "number",
                      "example": 0
                    },
                    "intersec_sitiosarq": {
                      "type": "boolean",
                      "example": true
                    },
                    "versoes_bases": {
                      "type": "object",
                      "properties": {
                        "ibama_dt": {
                          "type": "string",
                          "example": "24-11-2022"
                        },
                        "icmbio_dt": {
                          "type": "string",
                          "example": "25-11-2022"
                        },
                        "muni_dt": {
                          "type": "string",
                          "example": "13-10-2022"
                        },
                        "pam_dt": {
                          "type": "string",
                          "example": "26-10-2022"
                        },
                        "quil_dt": {
                          "type": "string",
                          "example": "25-11-2022"
                        },
                        "sitiosarq_dt": {
                          "type": "string",
                          "example": "25-11-2022"
                        },
                        "tindigs_dt": {
                          "type": "string",
                          "example": "25-11-2022"
                        },
                        "uc_dt": {
                          "type": "string",
                          "example": "20-11-2022"
                        }
                      }
                    }
                  }
                },
                "features": {
                  "type": "array",
                  "maxItems": 5,
                  "items": {
                    "$ref": "#/components/schemas/FeatureResponse"
                  }
                }
              }
            }
          ]
        },
        "FeatureResponse": {
          "description": "GeoJSon 'Feature' object",
          "externalDocs": {
            "url": "https://tools.ietf.org/html/rfc7946#section-3.2"
          },
          "allOf": [
            {
              "type": "object",
              "properties": {
                "id": {
                  "type": "number",
                  "example": 1
                },
                "type": {
                  "type": "string",
                  "enum": [
                    "Feature"
                  ]
                },
                "properties": {
                  "type": "object",
                  "properties": {
                    "prod_media": {
                      "type": "number",
                      "example": 310.9573358318662
                    },
                    "integr_topo": {
                      "type": "boolean",
                      "example": true
                    },
                    "area_calculada": {
                      "type": "number",
                      "example": 200.1682863766916
                    },
                    "intersec_muni": {
                      "type": "number",
                      "example": 100
                    },
                    "intersec_ibama": {
                      "type": "number",
                      "example": 0
                    },
                    "intersec_icmbio": {
                      "type": "number",
                      "example": 0
                    },
                    "intersec_uc": {
                      "type": "number",
                      "example": 0
                    },
                    "intersec_tindig": {
                      "type": "number",
                      "example": 0
                    },
                    "intersec_sitiosarq": {
                      "type": "boolean",
                      "example": false
                    }
                  }
                },
                "geometry": {
                  "allOf": [
                    {
                      "$ref": "#/components/schemas/Polygon"
                    }
                  ]
                }
              }
            }
          ]
        },
        "FeatureRequest": {
          "description": "GeoJSon 'Feature' object",
          "externalDocs": {
            "url": "https://tools.ietf.org/html/rfc7946#section-3.2"
          },
          "allOf": [
            {
              "type": "object",
              "required": [
                "type",
                "id",
                "geometry"
              ],
              "properties": {
                "id": {
                  "type": "number",
                  "example": 1
                },
                "type": {
                  "type": "string",
                  "enum": [
                    "Feature"
                  ]
                },
                "properties": {
                  "type": "array",
                  "maxItems": 5,
                  "items": {
                    "$ref": "#/components/schemas/Safra"
                  }
                },
                "geometry": {
                  "allOf": [
                    {
                      "$ref": "#/components/schemas/Polygon"
                    }
                  ]
                }
              }
            }
          ]
        },
        "CadastramentoRequest": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "example": 123456
            },
            "data_inicio": {
              "type": "string",
              "example": "2022-12-01"
            },
            "data_fim": {
              "type": "string",
              "example": "2023-03-25"
            }
          }
        },
        "CancelamentoRequest": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "example": 123456
            }
          }
        },
        "Safra": {
          "type": "object",
          "required": [
            "cultivar",
            "data_plantio",
            "data_colheita",
            "ano_safra",
            "metodo_plantio",
            "prod_declarada"
          ],
          "properties": {
            "cultivar": {
              "type": "string",
              "example": "346873"
            },
            "data_plantio": {
              "type": "string",
              "example": "2020-12-06"
            },
            "data_colheita": {
              "type": "string",
              "example": "2021-04-26"
            },
            "ano_safra": {
              "type": "string",
              "example": "2020/2021"
            },
            "metodo_plantio": {
              "type": "string",
              "example": "convencional"
            },
            "prod_declarada": {
              "type": "number",
              "example": 7264
            }
          }
        },
        "Polygon": {
          "description": "GeoJSon geometry",
          "externalDocs": {
            "url": "https://tools.ietf.org/html/rfc7946#section-3.1.6"
          },
          "allOf": [
            {
              "type": "object",
              "required": [
                "type",
                "coordinates"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "Polygon"
                  ]
                },
                "coordinates": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/LinearRing"
                  }
                }
              }
            }
          ]
        },
        "LinearRing": {
          "description": "A linear ring is a closed LineString with four or more positions.\nThe first and last positions are equivalent, and they MUST contain identical values; their representation SHOULD also be identical.\nA linear ring is the boundary of a surface or the boundary of a hole in a surface.\nA linear ring MUST follow the right-hand rule with respect to the area it bounds, i.e., exterior rings are counterclockwise, and holes are clockwise.\n",
          "externalDocs": {
            "url": "https://tools.ietf.org/html/rfc7946#section-3.1.6"
          },
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/Position"
          },
          "minItems": 4
        },
        "Position": {
          "description": "GeoJSon fundamental geometry construct.\nA position is an array of numbers. There MUST be two or more elements. The first two elements are longitude and latitude, or easting and northing, precisely in that order and using decimal numbers. Altitude or elevation MAY be included as an optional third element.\nImplementations SHOULD NOT extend positions beyond three elements because the semantics of extra elements are unspecified and ambiguous. Historically, some implementations have used a fourth element to carry a linear referencing measure (sometimes denoted as \"M\") or a numerical timestamp, but in most situations a parser will not be able to properly interpret these values. The interpretation and meaning of additional elements is beyond the scope of this specification, and additional elements MAY be ignored by parsers.\n",
          "externalDocs": {
            "url": "https://tools.ietf.org/html/rfc7946#section-3.1.1"
          },
          "type": "array",
          "minItems": 2,
          "maxItems": 3,
          "items": {
            "type": "number"
          }
        }
      },
      "securitySchemes": {
        "Authorization": {
          "type": "apiKey",
          "name": "Authorization",
          "in": "header"
        }
      }
    }
  }