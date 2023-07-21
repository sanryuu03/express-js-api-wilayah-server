This is a [express.js](https://expressjs.com/) with [`typescript`](https://www.typescriptlang.org/).

# SQL WILAYAH Provinsi

- create table provinsi

  CREATE TABLE indonesia_provinces (
  id INT NOT NULL AUTO_INCREMENT,
  code VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
  ) ENGINE = INNODB;

- insert (split) data ke table provinsi

  INSERT INTO indonesia_provinces (code, name)
  SELECT kode, nama
  FROM wilayah
  WHERE length(kode) = 2;

- create table kabupaten/kota

  CREATE TABLE indonesia_cities(
  id INT NOT NULL AUTO_INCREMENT,
  province_code VARCHAR(255) NOT NULL,
  code VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
  ) ENGINE = INNODB;

- insert (split) data ke table kabupaten/kota

  INSERT INTO indonesia_cities(province_code, code, name)
  SELECT SUBSTRING(kode, 1, 2) AS province_code, kode, nama
  FROM wilayah
  WHERE LENGTH(kode) = 5;

- create table kecamatan

  CREATE TABLE indonesia_districts(
  id INT NOT NULL AUTO_INCREMENT,
  city_code VARCHAR(255) NOT NULL,
  code VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
  ) ENGINE = INNODB;

- insert (split) data ke table kecamatan

  INSERT INTO indonesia_districts (city_code, code, name)
  SELECT SUBSTRING(kode, 1, 5) AS city_code, kode, nama
  FROM wilayah
  WHERE length(kode) = 8;

- create table kelurahan/desa

  CREATE TABLE indonesia_villages(
  id INT NOT NULL AUTO_INCREMENT,
  district_code VARCHAR(255) NOT NULL,
  code VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
  ) ENGINE = INNODB;

- insert (split) data ke table kelurahan/desa

  INSERT INTO indonesia_villages (district_code, code, name)
  SELECT SUBSTRING(kode, 1, 8) AS district_code, kode, nama
  FROM wilayah
  WHERE length(kode) = 13;

## Referensi

- database Referensi : https://github.com/cahyadsn/wilayah
- query split data : https://github.com/cahyadsn/wilayah/pull/21/commits/8e1da2c89e8fb0f0652d81b40edbcfdd6fc76ca3

## Penggunaan

- allProvinces

      www.domainanda.com/api/v1/master/provinces

- allCities

      www.domainanda.com/api/v1/master/regency

- allDistricts

      www.domainanda.com/api/v1/master/district

- allVillages

      www.domainanda.com/api/v1/master/village

- get filtered provinces

      www.domainanda.com/api/v1/master/provinces/:code/name

- get filtered regency

      www.domainanda.com/api/v1/master/regency/fromProvince/:id
      www.domainanda.com/api/v1/master/regency/:code/name

- get filtered district

      www.domainanda.com/api/v1/master/village/fromRegency/:id
      www.domainanda.com/api/v1/master/village/:code/name

- get filtered village

      www.domainanda.com/api/v1/master/village/fromDistrict/:id
      www.domainanda.com/api/v1/master/village/:code/name

## Informasi

- API ini saya buat menggunakan express.js + typescript + sequelize + MySQL
- database aslinya hanya 1 file yaitu "wilayah.sql", saya split untuk mempermudah query
- database bisa kalian lihat pada folder "backupDB"
