/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Error {
  data?: object | [] | null;
  error: {
    status?: number;
    name?: string;
    message?: string;
    details?: object;
  };
}

export interface ArticleRequest {
  data: {
    slug?: string;
    title?: string;
    /** @example "string or id" */
    cover?: number | string;
    content?: string;
  };
}

export interface ArticleListResponseDataItem {
  id?: number;
  attributes?: {
    slug?: string;
    title?: string;
    cover?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          folder?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                pathId?: number;
                parent?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                children?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                files?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      name?: string;
                      alternativeText?: string;
                      caption?: string;
                      width?: number;
                      height?: number;
                      formats?: any;
                      hash?: string;
                      ext?: string;
                      mime?: string;
                      /** @format float */
                      size?: number;
                      url?: string;
                      previewUrl?: string;
                      provider?: string;
                      provider_metadata?: any;
                      related?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        }[];
                      };
                      folder?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      folderPath?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            /** @format email */
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  name?: string;
                                  code?: string;
                                  description?: string;
                                  users?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    }[];
                                  };
                                  permissions?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {
                                        action?: string;
                                        subject?: string;
                                        properties?: any;
                                        conditions?: any;
                                        role?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        /** @format date-time */
                                        createdAt?: string;
                                        /** @format date-time */
                                        updatedAt?: string;
                                        createdBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        updatedBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                      };
                                    }[];
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            blocked?: boolean;
                            preferedLanguage?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                path?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            };
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    content?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: {
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                code?: string;
                description?: string;
                users?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      action?: string;
                      subject?: string;
                      properties?: any;
                      conditions?: any;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface ArticleListResponseDataItemLocalized {
  id?: number;
  attributes?: {
    slug?: string;
    title?: string;
    cover?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          folder?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                pathId?: number;
                parent?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                children?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                files?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      name?: string;
                      alternativeText?: string;
                      caption?: string;
                      width?: number;
                      height?: number;
                      formats?: any;
                      hash?: string;
                      ext?: string;
                      mime?: string;
                      /** @format float */
                      size?: number;
                      url?: string;
                      previewUrl?: string;
                      provider?: string;
                      provider_metadata?: any;
                      related?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        }[];
                      };
                      folder?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      folderPath?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            /** @format email */
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  name?: string;
                                  code?: string;
                                  description?: string;
                                  users?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    }[];
                                  };
                                  permissions?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {
                                        action?: string;
                                        subject?: string;
                                        properties?: any;
                                        conditions?: any;
                                        role?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        /** @format date-time */
                                        createdAt?: string;
                                        /** @format date-time */
                                        updatedAt?: string;
                                        createdBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        updatedBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                      };
                                    }[];
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            blocked?: boolean;
                            preferedLanguage?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                path?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            };
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    content?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: {
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                code?: string;
                description?: string;
                users?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      action?: string;
                      subject?: string;
                      properties?: any;
                      conditions?: any;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface ArticleListResponse {
  data?: ArticleListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface ArticleResponseDataObject {
  id?: number;
  attributes?: {
    slug?: string;
    title?: string;
    cover?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          folder?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                pathId?: number;
                parent?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                children?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                files?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      name?: string;
                      alternativeText?: string;
                      caption?: string;
                      width?: number;
                      height?: number;
                      formats?: any;
                      hash?: string;
                      ext?: string;
                      mime?: string;
                      /** @format float */
                      size?: number;
                      url?: string;
                      previewUrl?: string;
                      provider?: string;
                      provider_metadata?: any;
                      related?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        }[];
                      };
                      folder?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      folderPath?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            /** @format email */
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  name?: string;
                                  code?: string;
                                  description?: string;
                                  users?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    }[];
                                  };
                                  permissions?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {
                                        action?: string;
                                        subject?: string;
                                        properties?: any;
                                        conditions?: any;
                                        role?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        /** @format date-time */
                                        createdAt?: string;
                                        /** @format date-time */
                                        updatedAt?: string;
                                        createdBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        updatedBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                      };
                                    }[];
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            blocked?: boolean;
                            preferedLanguage?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                path?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            };
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    content?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: {
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                code?: string;
                description?: string;
                users?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      action?: string;
                      subject?: string;
                      properties?: any;
                      conditions?: any;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface ArticleResponseDataObjectLocalized {
  id?: number;
  attributes?: {
    slug?: string;
    title?: string;
    cover?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          folder?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                pathId?: number;
                parent?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                children?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                files?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      name?: string;
                      alternativeText?: string;
                      caption?: string;
                      width?: number;
                      height?: number;
                      formats?: any;
                      hash?: string;
                      ext?: string;
                      mime?: string;
                      /** @format float */
                      size?: number;
                      url?: string;
                      previewUrl?: string;
                      provider?: string;
                      provider_metadata?: any;
                      related?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        }[];
                      };
                      folder?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      folderPath?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            /** @format email */
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  name?: string;
                                  code?: string;
                                  description?: string;
                                  users?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    }[];
                                  };
                                  permissions?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {
                                        action?: string;
                                        subject?: string;
                                        properties?: any;
                                        conditions?: any;
                                        role?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        /** @format date-time */
                                        createdAt?: string;
                                        /** @format date-time */
                                        updatedAt?: string;
                                        createdBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        updatedBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                      };
                                    }[];
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            blocked?: boolean;
                            preferedLanguage?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                path?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            };
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    content?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: {
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                code?: string;
                description?: string;
                users?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      action?: string;
                      subject?: string;
                      properties?: any;
                      conditions?: any;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface ArticleResponse {
  data?: ArticleResponseDataObject;
  meta?: object;
}

export interface HomePageRequest {
  data: {
    blocks?: (UiButton | UiHero | (UiButton & UiHero))[];
  };
}

export interface HomePageListResponseDataItem {
  id?: number;
  attributes?: {
    blocks?: (UiButton | UiHero | (UiButton & UiHero))[];
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: {
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                code?: string;
                description?: string;
                users?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      action?: string;
                      subject?: string;
                      properties?: any;
                      conditions?: any;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface HomePageListResponseDataItemLocalized {
  id?: number;
  attributes?: {
    blocks?: (UiButton | UiHero | (UiButton & UiHero))[];
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: {
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                code?: string;
                description?: string;
                users?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      action?: string;
                      subject?: string;
                      properties?: any;
                      conditions?: any;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface HomePageListResponse {
  data?: HomePageListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface HomePageResponseDataObject {
  id?: number;
  attributes?: {
    blocks?: (UiButton | UiHero | (UiButton & UiHero))[];
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: {
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                code?: string;
                description?: string;
                users?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      action?: string;
                      subject?: string;
                      properties?: any;
                      conditions?: any;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface HomePageResponseDataObjectLocalized {
  id?: number;
  attributes?: {
    blocks?: (UiButton | UiHero | (UiButton & UiHero))[];
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: {
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                code?: string;
                description?: string;
                users?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      action?: string;
                      subject?: string;
                      properties?: any;
                      conditions?: any;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface HomePageResponse {
  data?: HomePageResponseDataObject;
  meta?: object;
}

export interface UiButton {
  id?: number;
  __component?: string;
  text?: string;
  iconName?: string;
}

export interface UiButtonComponent {
  id?: number;
  text?: string;
  iconName?: string;
}

export interface UiHero {
  id?: number;
  __component?: string;
  title?: string;
  subtitle?: string;
  callToAction?: UiButtonComponent;
}

export interface MetadataRequest {
  data: {
    title: string;
    description?: string;
    /** @example "string or id" */
    image?: number | string;
  };
}

export interface MetadataListResponseDataItem {
  id?: number;
  attributes?: {
    title?: string;
    description?: string;
    image?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          folder?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                pathId?: number;
                parent?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                children?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                files?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      name?: string;
                      alternativeText?: string;
                      caption?: string;
                      width?: number;
                      height?: number;
                      formats?: any;
                      hash?: string;
                      ext?: string;
                      mime?: string;
                      /** @format float */
                      size?: number;
                      url?: string;
                      previewUrl?: string;
                      provider?: string;
                      provider_metadata?: any;
                      related?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        }[];
                      };
                      folder?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      folderPath?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            /** @format email */
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  name?: string;
                                  code?: string;
                                  description?: string;
                                  users?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    }[];
                                  };
                                  permissions?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {
                                        action?: string;
                                        subject?: string;
                                        properties?: any;
                                        conditions?: any;
                                        role?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        /** @format date-time */
                                        createdAt?: string;
                                        /** @format date-time */
                                        updatedAt?: string;
                                        createdBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        updatedBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                      };
                                    }[];
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            blocked?: boolean;
                            preferedLanguage?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                path?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            };
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: {
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                code?: string;
                description?: string;
                users?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      action?: string;
                      subject?: string;
                      properties?: any;
                      conditions?: any;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface MetadataListResponseDataItemLocalized {
  id?: number;
  attributes?: {
    title?: string;
    description?: string;
    image?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          folder?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                pathId?: number;
                parent?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                children?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                files?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      name?: string;
                      alternativeText?: string;
                      caption?: string;
                      width?: number;
                      height?: number;
                      formats?: any;
                      hash?: string;
                      ext?: string;
                      mime?: string;
                      /** @format float */
                      size?: number;
                      url?: string;
                      previewUrl?: string;
                      provider?: string;
                      provider_metadata?: any;
                      related?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        }[];
                      };
                      folder?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      folderPath?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            /** @format email */
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  name?: string;
                                  code?: string;
                                  description?: string;
                                  users?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    }[];
                                  };
                                  permissions?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {
                                        action?: string;
                                        subject?: string;
                                        properties?: any;
                                        conditions?: any;
                                        role?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        /** @format date-time */
                                        createdAt?: string;
                                        /** @format date-time */
                                        updatedAt?: string;
                                        createdBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        updatedBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                      };
                                    }[];
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            blocked?: boolean;
                            preferedLanguage?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                path?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            };
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: {
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                code?: string;
                description?: string;
                users?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      action?: string;
                      subject?: string;
                      properties?: any;
                      conditions?: any;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface MetadataListResponse {
  data?: MetadataListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface MetadataResponseDataObject {
  id?: number;
  attributes?: {
    title?: string;
    description?: string;
    image?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          folder?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                pathId?: number;
                parent?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                children?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                files?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      name?: string;
                      alternativeText?: string;
                      caption?: string;
                      width?: number;
                      height?: number;
                      formats?: any;
                      hash?: string;
                      ext?: string;
                      mime?: string;
                      /** @format float */
                      size?: number;
                      url?: string;
                      previewUrl?: string;
                      provider?: string;
                      provider_metadata?: any;
                      related?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        }[];
                      };
                      folder?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      folderPath?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            /** @format email */
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  name?: string;
                                  code?: string;
                                  description?: string;
                                  users?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    }[];
                                  };
                                  permissions?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {
                                        action?: string;
                                        subject?: string;
                                        properties?: any;
                                        conditions?: any;
                                        role?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        /** @format date-time */
                                        createdAt?: string;
                                        /** @format date-time */
                                        updatedAt?: string;
                                        createdBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        updatedBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                      };
                                    }[];
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            blocked?: boolean;
                            preferedLanguage?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                path?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            };
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: {
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                code?: string;
                description?: string;
                users?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      action?: string;
                      subject?: string;
                      properties?: any;
                      conditions?: any;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface MetadataResponseDataObjectLocalized {
  id?: number;
  attributes?: {
    title?: string;
    description?: string;
    image?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          /** @format float */
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          folder?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                pathId?: number;
                parent?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                children?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                files?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      name?: string;
                      alternativeText?: string;
                      caption?: string;
                      width?: number;
                      height?: number;
                      formats?: any;
                      hash?: string;
                      ext?: string;
                      mime?: string;
                      /** @format float */
                      size?: number;
                      url?: string;
                      previewUrl?: string;
                      provider?: string;
                      provider_metadata?: any;
                      related?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        }[];
                      };
                      folder?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      folderPath?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            /** @format email */
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  name?: string;
                                  code?: string;
                                  description?: string;
                                  users?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    }[];
                                  };
                                  permissions?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {
                                        action?: string;
                                        subject?: string;
                                        properties?: any;
                                        conditions?: any;
                                        role?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        /** @format date-time */
                                        createdAt?: string;
                                        /** @format date-time */
                                        updatedAt?: string;
                                        createdBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        updatedBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                      };
                                    }[];
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            blocked?: boolean;
                            preferedLanguage?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                path?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            };
          };
          folderPath?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    /** @format date-time */
    publishedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: {
          firstname?: string;
          lastname?: string;
          username?: string;
          /** @format email */
          email?: string;
          resetPasswordToken?: string;
          registrationToken?: string;
          isActive?: boolean;
          roles?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                code?: string;
                description?: string;
                users?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      action?: string;
                      subject?: string;
                      properties?: any;
                      conditions?: any;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          blocked?: boolean;
          preferedLanguage?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface MetadataResponse {
  data?: MetadataResponseDataObject;
  meta?: object;
}

export interface UploadFileRequest {
  data: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash: string;
    ext?: string;
    mime: string;
    /** @format float */
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: any;
    related?: (number | string)[];
    /** @example "string or id" */
    folder?: number | string;
    folderPath: string;
  };
}

export interface UploadFileListResponseDataItem {
  id?: number;
  attributes?: {
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    folder?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          pathId?: number;
          parent?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          children?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          files?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                /** @format float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                folder?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          path?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UploadFileListResponseDataItemLocalized {
  id?: number;
  attributes?: {
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    folder?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          pathId?: number;
          parent?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          children?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          files?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                /** @format float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                folder?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          path?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UploadFileListResponse {
  data?: UploadFileListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface UploadFileResponseDataObject {
  id?: number;
  attributes?: {
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    folder?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          pathId?: number;
          parent?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          children?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          files?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                /** @format float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                folder?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          path?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UploadFileResponseDataObjectLocalized {
  id?: number;
  attributes?: {
    name?: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: any;
    hash?: string;
    ext?: string;
    mime?: string;
    /** @format float */
    size?: number;
    url?: string;
    previewUrl?: string;
    provider?: string;
    provider_metadata?: any;
    related?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    folder?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          pathId?: number;
          parent?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          children?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          files?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                /** @format float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                folder?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          path?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    folderPath?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UploadFileResponse {
  data?: UploadFileResponseDataObject;
  meta?: object;
}

export interface UploadFolderRequest {
  data: {
    name: string;
    pathId: number;
    /** @example "string or id" */
    parent?: number | string;
    children?: (number | string)[];
    files?: (number | string)[];
    path: string;
  };
}

export interface UploadFolderListResponseDataItem {
  id?: number;
  attributes?: {
    name?: string;
    pathId?: number;
    parent?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          pathId?: number;
          parent?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          children?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          files?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                /** @format float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                folder?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          path?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    children?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    files?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    path?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UploadFolderListResponseDataItemLocalized {
  id?: number;
  attributes?: {
    name?: string;
    pathId?: number;
    parent?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          pathId?: number;
          parent?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          children?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          files?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                /** @format float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                folder?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          path?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    children?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    files?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    path?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UploadFolderListResponse {
  data?: UploadFolderListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface UploadFolderResponseDataObject {
  id?: number;
  attributes?: {
    name?: string;
    pathId?: number;
    parent?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          pathId?: number;
          parent?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          children?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          files?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                /** @format float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                folder?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          path?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    children?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    files?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    path?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UploadFolderResponseDataObjectLocalized {
  id?: number;
  attributes?: {
    name?: string;
    pathId?: number;
    parent?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          pathId?: number;
          parent?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          children?: {
            data?: {
              id?: number;
              attributes?: object;
            }[];
          };
          files?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                /** @format float */
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                folder?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                folderPath?: string;
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          path?: string;
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    children?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    files?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    path?: string;
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UploadFolderResponse {
  data?: UploadFolderResponseDataObject;
  meta?: object;
}

export interface UsersPermissionsPermissionRequest {
  data: {
    action: string;
    /** @example "string or id" */
    role?: number | string;
  };
}

export interface UsersPermissionsPermissionListResponseDataItem {
  id?: number;
  attributes?: {
    action?: string;
    role?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          description?: string;
          type?: string;
          permissions?: {
            data?: {
              id?: number;
              attributes?: {
                action?: string;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          users?: {
            data?: {
              id?: number;
              attributes?: {
                username?: string;
                /** @format email */
                email?: string;
                provider?: string;
                resetPasswordToken?: string;
                confirmationToken?: string;
                confirmed?: boolean;
                blocked?: boolean;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UsersPermissionsPermissionListResponseDataItemLocalized {
  id?: number;
  attributes?: {
    action?: string;
    role?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          description?: string;
          type?: string;
          permissions?: {
            data?: {
              id?: number;
              attributes?: {
                action?: string;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          users?: {
            data?: {
              id?: number;
              attributes?: {
                username?: string;
                /** @format email */
                email?: string;
                provider?: string;
                resetPasswordToken?: string;
                confirmationToken?: string;
                confirmed?: boolean;
                blocked?: boolean;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UsersPermissionsPermissionListResponse {
  data?: UsersPermissionsPermissionListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface UsersPermissionsPermissionResponseDataObject {
  id?: number;
  attributes?: {
    action?: string;
    role?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          description?: string;
          type?: string;
          permissions?: {
            data?: {
              id?: number;
              attributes?: {
                action?: string;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          users?: {
            data?: {
              id?: number;
              attributes?: {
                username?: string;
                /** @format email */
                email?: string;
                provider?: string;
                resetPasswordToken?: string;
                confirmationToken?: string;
                confirmed?: boolean;
                blocked?: boolean;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UsersPermissionsPermissionResponseDataObjectLocalized {
  id?: number;
  attributes?: {
    action?: string;
    role?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          description?: string;
          type?: string;
          permissions?: {
            data?: {
              id?: number;
              attributes?: {
                action?: string;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          users?: {
            data?: {
              id?: number;
              attributes?: {
                username?: string;
                /** @format email */
                email?: string;
                provider?: string;
                resetPasswordToken?: string;
                confirmationToken?: string;
                confirmed?: boolean;
                blocked?: boolean;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UsersPermissionsPermissionResponse {
  data?: UsersPermissionsPermissionResponseDataObject;
  meta?: object;
}

export interface UsersPermissionsRoleRequest {
  data: {
    name: string;
    description?: string;
    type?: string;
    permissions?: (number | string)[];
    users?: (number | string)[];
  };
}

export interface UsersPermissionsRoleListResponseDataItem {
  id?: number;
  attributes?: {
    name?: string;
    description?: string;
    type?: string;
    permissions?: {
      data?: {
        id?: number;
        attributes?: {
          action?: string;
          role?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                description?: string;
                type?: string;
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                users?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      username?: string;
                      /** @format email */
                      email?: string;
                      provider?: string;
                      resetPasswordToken?: string;
                      confirmationToken?: string;
                      confirmed?: boolean;
                      blocked?: boolean;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            /** @format email */
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  name?: string;
                                  code?: string;
                                  description?: string;
                                  users?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    }[];
                                  };
                                  permissions?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {
                                        action?: string;
                                        subject?: string;
                                        properties?: any;
                                        conditions?: any;
                                        role?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        /** @format date-time */
                                        createdAt?: string;
                                        /** @format date-time */
                                        updatedAt?: string;
                                        createdBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        updatedBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                      };
                                    }[];
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            blocked?: boolean;
                            preferedLanguage?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            };
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      }[];
    };
    users?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UsersPermissionsRoleListResponseDataItemLocalized {
  id?: number;
  attributes?: {
    name?: string;
    description?: string;
    type?: string;
    permissions?: {
      data?: {
        id?: number;
        attributes?: {
          action?: string;
          role?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                description?: string;
                type?: string;
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                users?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      username?: string;
                      /** @format email */
                      email?: string;
                      provider?: string;
                      resetPasswordToken?: string;
                      confirmationToken?: string;
                      confirmed?: boolean;
                      blocked?: boolean;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            /** @format email */
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  name?: string;
                                  code?: string;
                                  description?: string;
                                  users?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    }[];
                                  };
                                  permissions?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {
                                        action?: string;
                                        subject?: string;
                                        properties?: any;
                                        conditions?: any;
                                        role?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        /** @format date-time */
                                        createdAt?: string;
                                        /** @format date-time */
                                        updatedAt?: string;
                                        createdBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        updatedBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                      };
                                    }[];
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            blocked?: boolean;
                            preferedLanguage?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            };
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      }[];
    };
    users?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UsersPermissionsRoleListResponse {
  data?: UsersPermissionsRoleListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface UsersPermissionsRoleResponseDataObject {
  id?: number;
  attributes?: {
    name?: string;
    description?: string;
    type?: string;
    permissions?: {
      data?: {
        id?: number;
        attributes?: {
          action?: string;
          role?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                description?: string;
                type?: string;
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                users?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      username?: string;
                      /** @format email */
                      email?: string;
                      provider?: string;
                      resetPasswordToken?: string;
                      confirmationToken?: string;
                      confirmed?: boolean;
                      blocked?: boolean;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            /** @format email */
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  name?: string;
                                  code?: string;
                                  description?: string;
                                  users?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    }[];
                                  };
                                  permissions?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {
                                        action?: string;
                                        subject?: string;
                                        properties?: any;
                                        conditions?: any;
                                        role?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        /** @format date-time */
                                        createdAt?: string;
                                        /** @format date-time */
                                        updatedAt?: string;
                                        createdBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        updatedBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                      };
                                    }[];
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            blocked?: boolean;
                            preferedLanguage?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            };
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      }[];
    };
    users?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UsersPermissionsRoleResponseDataObjectLocalized {
  id?: number;
  attributes?: {
    name?: string;
    description?: string;
    type?: string;
    permissions?: {
      data?: {
        id?: number;
        attributes?: {
          action?: string;
          role?: {
            data?: {
              id?: number;
              attributes?: {
                name?: string;
                description?: string;
                type?: string;
                permissions?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  }[];
                };
                users?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      username?: string;
                      /** @format email */
                      email?: string;
                      provider?: string;
                      resetPasswordToken?: string;
                      confirmationToken?: string;
                      confirmed?: boolean;
                      blocked?: boolean;
                      role?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            /** @format email */
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  name?: string;
                                  code?: string;
                                  description?: string;
                                  users?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    }[];
                                  };
                                  permissions?: {
                                    data?: {
                                      id?: number;
                                      attributes?: {
                                        action?: string;
                                        subject?: string;
                                        properties?: any;
                                        conditions?: any;
                                        role?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        /** @format date-time */
                                        createdAt?: string;
                                        /** @format date-time */
                                        updatedAt?: string;
                                        createdBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                        updatedBy?: {
                                          data?: {
                                            id?: number;
                                            attributes?: object;
                                          };
                                        };
                                      };
                                    }[];
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            blocked?: boolean;
                            preferedLanguage?: string;
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  }[];
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            };
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      }[];
    };
    users?: {
      data?: {
        id?: number;
        attributes?: object;
      }[];
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UsersPermissionsRoleResponse {
  data?: UsersPermissionsRoleResponseDataObject;
  meta?: object;
}

export interface UsersPermissionsUserRequest {
  data: {
    username: string;
    /** @format email */
    email: string;
    provider?: string;
    /**
     * @format password
     * @example "*******"
     */
    password?: string;
    resetPasswordToken?: string;
    confirmationToken?: string;
    confirmed?: boolean;
    blocked?: boolean;
    /** @example "string or id" */
    role?: number | string;
  };
}

export interface UsersPermissionsUserListResponseDataItem {
  id?: number;
  attributes?: {
    username?: string;
    /** @format email */
    email?: string;
    provider?: string;
    resetPasswordToken?: string;
    confirmationToken?: string;
    confirmed?: boolean;
    blocked?: boolean;
    role?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          description?: string;
          type?: string;
          permissions?: {
            data?: {
              id?: number;
              attributes?: {
                action?: string;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          users?: {
            data?: {
              id?: number;
              attributes?: {
                username?: string;
                /** @format email */
                email?: string;
                provider?: string;
                resetPasswordToken?: string;
                confirmationToken?: string;
                confirmed?: boolean;
                blocked?: boolean;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UsersPermissionsUserListResponseDataItemLocalized {
  id?: number;
  attributes?: {
    username?: string;
    /** @format email */
    email?: string;
    provider?: string;
    resetPasswordToken?: string;
    confirmationToken?: string;
    confirmed?: boolean;
    blocked?: boolean;
    role?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          description?: string;
          type?: string;
          permissions?: {
            data?: {
              id?: number;
              attributes?: {
                action?: string;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          users?: {
            data?: {
              id?: number;
              attributes?: {
                username?: string;
                /** @format email */
                email?: string;
                provider?: string;
                resetPasswordToken?: string;
                confirmationToken?: string;
                confirmed?: boolean;
                blocked?: boolean;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UsersPermissionsUserListResponse {
  data?: UsersPermissionsUserListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      /** @min 25 */
      pageSize?: number;
      /** @max 1 */
      pageCount?: number;
      total?: number;
    };
  };
}

export interface UsersPermissionsUserResponseDataObject {
  id?: number;
  attributes?: {
    username?: string;
    /** @format email */
    email?: string;
    provider?: string;
    resetPasswordToken?: string;
    confirmationToken?: string;
    confirmed?: boolean;
    blocked?: boolean;
    role?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          description?: string;
          type?: string;
          permissions?: {
            data?: {
              id?: number;
              attributes?: {
                action?: string;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          users?: {
            data?: {
              id?: number;
              attributes?: {
                username?: string;
                /** @format email */
                email?: string;
                provider?: string;
                resetPasswordToken?: string;
                confirmationToken?: string;
                confirmed?: boolean;
                blocked?: boolean;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UsersPermissionsUserResponseDataObjectLocalized {
  id?: number;
  attributes?: {
    username?: string;
    /** @format email */
    email?: string;
    provider?: string;
    resetPasswordToken?: string;
    confirmationToken?: string;
    confirmed?: boolean;
    blocked?: boolean;
    role?: {
      data?: {
        id?: number;
        attributes?: {
          name?: string;
          description?: string;
          type?: string;
          permissions?: {
            data?: {
              id?: number;
              attributes?: {
                action?: string;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: {
                      firstname?: string;
                      lastname?: string;
                      username?: string;
                      /** @format email */
                      email?: string;
                      resetPasswordToken?: string;
                      registrationToken?: string;
                      isActive?: boolean;
                      roles?: {
                        data?: {
                          id?: number;
                          attributes?: {
                            name?: string;
                            code?: string;
                            description?: string;
                            users?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              }[];
                            };
                            permissions?: {
                              data?: {
                                id?: number;
                                attributes?: {
                                  action?: string;
                                  subject?: string;
                                  properties?: any;
                                  conditions?: any;
                                  role?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  /** @format date-time */
                                  createdAt?: string;
                                  /** @format date-time */
                                  updatedAt?: string;
                                  createdBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                  updatedBy?: {
                                    data?: {
                                      id?: number;
                                      attributes?: object;
                                    };
                                  };
                                };
                              }[];
                            };
                            /** @format date-time */
                            createdAt?: string;
                            /** @format date-time */
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                            updatedBy?: {
                              data?: {
                                id?: number;
                                attributes?: object;
                              };
                            };
                          };
                        }[];
                      };
                      blocked?: boolean;
                      preferedLanguage?: string;
                      /** @format date-time */
                      createdAt?: string;
                      /** @format date-time */
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                      updatedBy?: {
                        data?: {
                          id?: number;
                          attributes?: object;
                        };
                      };
                    };
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          users?: {
            data?: {
              id?: number;
              attributes?: {
                username?: string;
                /** @format email */
                email?: string;
                provider?: string;
                resetPasswordToken?: string;
                confirmationToken?: string;
                confirmed?: boolean;
                blocked?: boolean;
                role?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                /** @format date-time */
                createdAt?: string;
                /** @format date-time */
                updatedAt?: string;
                createdBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
                updatedBy?: {
                  data?: {
                    id?: number;
                    attributes?: object;
                  };
                };
              };
            }[];
          };
          /** @format date-time */
          createdAt?: string;
          /** @format date-time */
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
          updatedBy?: {
            data?: {
              id?: number;
              attributes?: object;
            };
          };
        };
      };
    };
    /** @format date-time */
    createdAt?: string;
    /** @format date-time */
    updatedAt?: string;
    createdBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
    updatedBy?: {
      data?: {
        id?: number;
        attributes?: object;
      };
    };
  };
}

export interface UsersPermissionsUserResponse {
  data?: UsersPermissionsUserResponseDataObject;
  meta?: object;
}

export interface UsersPermissionsRole {
  id?: number;
  name?: string;
  description?: string;
  type?: string;
  createdAt?: datetime;
  updatedAt?: datetime;
}

export interface UsersPermissionsUser {
  /** @example 1 */
  id?: number;
  /** @example "foo.bar" */
  username?: string;
  /** @example "foo.bar@strapi.io" */
  email?: string;
  /** @example "local" */
  provider?: string;
  /** @example true */
  confirmed?: boolean;
  /** @example false */
  blocked?: boolean;
  /** @example "2022-06-02T08:32:06.258Z" */
  createdAt?: datetime;
  /** @example "2022-06-02T08:32:06.267Z" */
  updatedAt?: datetime;
}

export interface UsersPermissionsUserRegistration {
  /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" */
  jwt?: string;
  user?: UsersPermissionsUser;
}

export type UsersPermissionsPermissionsTree = Record<
  string,
  {
    /** every controller of the api */
    controllers?: Record<
      string,
      Record<
        string,
        {
          enabled?: boolean;
          policy?: string;
        }
      >
    >;
  }
>;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:1337/api";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === "number" ? value : `${value}`
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${
        queryString ? `?${queryString}` : ""
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal: cancelToken
          ? this.createAbortSignal(cancelToken)
          : requestParams.signal,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title DOCUMENTATION
 * @version 1.0.0
 * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
 * @termsOfService YOUR_TERMS_OF_SERVICE_URL
 * @baseUrl http://localhost:1337/api
 * @externalDocs https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html
 * @contact TEAM <contact-email@something.io> (mywebsite.io)
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  articles = {
    /**
     * No description
     *
     * @tags Article
     * @name GetArticles
     * @request GET:/articles
     * @secure
     */
    getArticles: (
      query?: {
        /** Sort by attributes ascending (asc) or descending (desc) */
        sort?: string;
        /** Return page/pageSize (default: true) */
        "pagination[withCount]"?: boolean;
        /** Page number (default: 0) */
        "pagination[page]"?: number;
        /** Page size (default: 25) */
        "pagination[pageSize]"?: number;
        /** Offset value (default: 0) */
        "pagination[start]"?: number;
        /** Number of entities to return (default: 25) */
        "pagination[limit]"?: number;
        /** Fields to return (ex: title,author) */
        fields?: string;
        /** Relations to return */
        populate?: string;
        /** Filters to apply */
        filters?: object;
        /** Locale to apply */
        locale?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ArticleListResponse, Error>({
        path: `/articles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Article
     * @name PostArticles
     * @request POST:/articles
     * @secure
     */
    postArticles: (data: ArticleRequest, params: RequestParams = {}) =>
      this.request<ArticleResponse, Error>({
        path: `/articles`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Article
     * @name GetArticlesId
     * @request GET:/articles/{id}
     * @secure
     */
    getArticlesId: (id: number, params: RequestParams = {}) =>
      this.request<ArticleResponse, Error>({
        path: `/articles/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Article
     * @name PutArticlesId
     * @request PUT:/articles/{id}
     * @secure
     */
    putArticlesId: (
      id: number,
      data: ArticleRequest,
      params: RequestParams = {}
    ) =>
      this.request<ArticleResponse, Error>({
        path: `/articles/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Article
     * @name DeleteArticlesId
     * @request DELETE:/articles/{id}
     * @secure
     */
    deleteArticlesId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/articles/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  homePage = {
    /**
     * No description
     *
     * @tags Home-page
     * @name GetHomePage
     * @request GET:/home-page
     * @secure
     */
    getHomePage: (
      query?: {
        /** Sort by attributes ascending (asc) or descending (desc) */
        sort?: string;
        /** Return page/pageSize (default: true) */
        "pagination[withCount]"?: boolean;
        /** Page number (default: 0) */
        "pagination[page]"?: number;
        /** Page size (default: 25) */
        "pagination[pageSize]"?: number;
        /** Offset value (default: 0) */
        "pagination[start]"?: number;
        /** Number of entities to return (default: 25) */
        "pagination[limit]"?: number;
        /** Fields to return (ex: title,author) */
        fields?: string;
        /** Relations to return */
        populate?: string;
        /** Filters to apply */
        filters?: object;
        /** Locale to apply */
        locale?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<HomePageListResponse, Error>({
        path: `/home-page`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Home-page
     * @name PutHomePage
     * @request PUT:/home-page
     * @secure
     */
    putHomePage: (data: HomePageRequest, params: RequestParams = {}) =>
      this.request<HomePageResponse, Error>({
        path: `/home-page`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Home-page
     * @name DeleteHomePage
     * @request DELETE:/home-page
     * @secure
     */
    deleteHomePage: (params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/home-page`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  metadata = {
    /**
     * No description
     *
     * @tags Metadata
     * @name GetMetadata
     * @request GET:/metadata
     * @secure
     */
    getMetadata: (
      query?: {
        /** Sort by attributes ascending (asc) or descending (desc) */
        sort?: string;
        /** Return page/pageSize (default: true) */
        "pagination[withCount]"?: boolean;
        /** Page number (default: 0) */
        "pagination[page]"?: number;
        /** Page size (default: 25) */
        "pagination[pageSize]"?: number;
        /** Offset value (default: 0) */
        "pagination[start]"?: number;
        /** Number of entities to return (default: 25) */
        "pagination[limit]"?: number;
        /** Fields to return (ex: title,author) */
        fields?: string;
        /** Relations to return */
        populate?: string;
        /** Filters to apply */
        filters?: object;
        /** Locale to apply */
        locale?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<MetadataListResponse, Error>({
        path: `/metadata`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name PutMetadata
     * @request PUT:/metadata
     * @secure
     */
    putMetadata: (data: MetadataRequest, params: RequestParams = {}) =>
      this.request<MetadataResponse, Error>({
        path: `/metadata`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name DeleteMetadata
     * @request DELETE:/metadata
     * @secure
     */
    deleteMetadata: (params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/metadata`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  upload = {
    /**
     * No description
     *
     * @tags Upload - File
     * @name GetUploadFiles
     * @request GET:/upload/files
     * @secure
     */
    getUploadFiles: (
      query?: {
        /** Sort by attributes ascending (asc) or descending (desc) */
        sort?: string;
        /** Return page/pageSize (default: true) */
        "pagination[withCount]"?: boolean;
        /** Page number (default: 0) */
        "pagination[page]"?: number;
        /** Page size (default: 25) */
        "pagination[pageSize]"?: number;
        /** Offset value (default: 0) */
        "pagination[start]"?: number;
        /** Number of entities to return (default: 25) */
        "pagination[limit]"?: number;
        /** Fields to return (ex: title,author) */
        fields?: string;
        /** Relations to return */
        populate?: string;
        /** Filters to apply */
        filters?: object;
        /** Locale to apply */
        locale?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<UploadFileListResponse, Error>({
        path: `/upload/files`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - File
     * @name GetUploadFilesId
     * @request GET:/upload/files/{id}
     * @secure
     */
    getUploadFilesId: (id: number, params: RequestParams = {}) =>
      this.request<UploadFileResponse, Error>({
        path: `/upload/files/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - File
     * @name DeleteUploadFilesId
     * @request DELETE:/upload/files/{id}
     * @secure
     */
    deleteUploadFilesId: (id: number, params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/upload/files/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  usersPermissions = {
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name PermissionsList
     * @summary Get default generated permissions
     * @request GET:/users-permissions/permissions
     * @secure
     */
    permissionsList: (params: RequestParams = {}) =>
      this.request<
        {
          permissions?: UsersPermissionsPermissionsTree;
        },
        Error
      >({
        path: `/users-permissions/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesDetail
     * @summary Get a role
     * @request GET:/users-permissions/roles/{id}
     * @secure
     */
    rolesDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          role?: UsersPermissionsRole;
        },
        Error
      >({
        path: `/users-permissions/roles/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesList
     * @summary List roles
     * @request GET:/users-permissions/roles
     * @secure
     */
    rolesList: (params: RequestParams = {}) =>
      this.request<
        {
          roles?: (UsersPermissionsRole & {
            nb_users?: number;
          })[];
        },
        Error
      >({
        path: `/users-permissions/roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesCreate
     * @summary Create a role
     * @request POST:/users-permissions/roles
     * @secure
     */
    rolesCreate: (
      data: {
        name?: string;
        description?: string;
        type?: string;
        permissions?: UsersPermissionsPermissionsTree;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          ok?: "true";
        },
        Error
      >({
        path: `/users-permissions/roles`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesUpdate
     * @summary Update a role
     * @request PUT:/users-permissions/roles/{role}
     * @secure
     */
    rolesUpdate: (
      role: string,
      data: {
        name?: string;
        description?: string;
        type?: string;
        permissions?: UsersPermissionsPermissionsTree;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          ok?: "true";
        },
        Error
      >({
        path: `/users-permissions/roles/${role}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name RolesDelete
     * @summary Delete a role
     * @request DELETE:/users-permissions/roles/{role}
     * @secure
     */
    rolesDelete: (role: string, params: RequestParams = {}) =>
      this.request<
        {
          ok?: "true";
        },
        Error
      >({
        path: `/users-permissions/roles/${role}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name CountList
     * @summary Get user count
     * @request GET:/users/count
     * @secure
     */
    countList: (params: RequestParams = {}) =>
      this.request<number, Error>({
        path: `/users/count`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersList
     * @summary Get list of users
     * @request GET:/users
     * @secure
     */
    usersList: (params: RequestParams = {}) =>
      this.request<UsersPermissionsUser[], Error>({
        path: `/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersCreate
     * @summary Create a user
     * @request POST:/users
     * @secure
     */
    usersCreate: (
      data: {
        email: string;
        username: string;
        password: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        UsersPermissionsUser & {
          role?: UsersPermissionsRole;
        },
        Error
      >({
        path: `/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name GetUsers
     * @summary Get authenticated user info
     * @request GET:/users/me
     * @secure
     */
    getUsers: (params: RequestParams = {}) =>
      this.request<UsersPermissionsUser, Error>({
        path: `/users/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersDetail
     * @summary Get a user
     * @request GET:/users/{id}
     * @secure
     */
    usersDetail: (id: string, params: RequestParams = {}) =>
      this.request<UsersPermissionsUser, Error>({
        path: `/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersUpdate
     * @summary Update a user
     * @request PUT:/users/{id}
     * @secure
     */
    usersUpdate: (
      id: string,
      data: {
        email: string;
        username: string;
        password: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        UsersPermissionsUser & {
          role?: UsersPermissionsRole;
        },
        Error
      >({
        path: `/users/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Users & Roles
     * @name UsersDelete
     * @summary Delete a user
     * @request DELETE:/users/{id}
     * @secure
     */
    usersDelete: (id: string, params: RequestParams = {}) =>
      this.request<UsersPermissionsUser, Error>({
        path: `/users/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  connect = {
    /**
     * @description Redirects to provider login before being redirect to /auth/{provider}/callback
     *
     * @tags Users-Permissions - Auth
     * @name List
     * @summary Login with a provider
     * @request GET:/connect/(.*)
     * @secure
     */
    list: (params: RequestParams = {}) =>
      this.request<any, void | Error>({
        path: `/connect/(.*)`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  auth = {
    /**
     * @description Returns a jwt token and user info
     *
     * @tags Users-Permissions - Auth
     * @name LocalCreate
     * @summary Local login
     * @request POST:/auth/local
     * @secure
     */
    localCreate: (
      data: {
        identifier?: string;
        password?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<UsersPermissionsUserRegistration, Error>({
        path: `/auth/local`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a jwt token and user info
     *
     * @tags Users-Permissions - Auth
     * @name LocalRegisterCreate
     * @summary Register a user
     * @request POST:/auth/local/register
     * @secure
     */
    localRegisterCreate: (
      data: {
        username?: string;
        email?: string;
        password?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<UsersPermissionsUserRegistration, Error>({
        path: `/auth/local/register`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name CallbackDetail
     * @summary Default Callback from provider auth
     * @request GET:/auth/{provider}/callback
     * @secure
     */
    callbackDetail: (provider: string, params: RequestParams = {}) =>
      this.request<UsersPermissionsUserRegistration, Error>({
        path: `/auth/${provider}/callback`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name ForgotPasswordCreate
     * @summary Send rest password email
     * @request POST:/auth/forgot-password
     * @secure
     */
    forgotPasswordCreate: (
      data: {
        email?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          ok?: "true";
        },
        Error
      >({
        path: `/auth/forgot-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name ResetPasswordCreate
     * @summary Rest user password
     * @request POST:/auth/reset-password
     * @secure
     */
    resetPasswordCreate: (
      data: {
        password?: string;
        passwordConfirmation?: string;
        code?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<UsersPermissionsUserRegistration, Error>({
        path: `/auth/reset-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name ChangePasswordCreate
     * @summary Update user's own password
     * @request POST:/auth/change-password
     * @secure
     */
    changePasswordCreate: (
      data: {
        password: string;
        currentPassword: string;
        passwordConfirmation: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<UsersPermissionsUserRegistration, Error>({
        path: `/auth/change-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name EmailConfirmationList
     * @summary Confirm user email
     * @request GET:/auth/email-confirmation
     * @secure
     */
    emailConfirmationList: (
      query?: {
        /** confirmation token received by email */
        confirmation?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<any, void | Error>({
        path: `/auth/email-confirmation`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users-Permissions - Auth
     * @name SendEmailConfirmationCreate
     * @summary Send confirmation email
     * @request POST:/auth/send-email-confirmation
     * @secure
     */
    sendEmailConfirmationCreate: (
      data: {
        email?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          email?: string;
          sent?: "true";
        },
        Error
      >({
        path: `/auth/send-email-confirmation`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
