var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_tourism_attraction_1 = new ol.format.GeoJSON();
var features_tourism_attraction_1 = format_tourism_attraction_1.readFeatures(json_tourism_attraction_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tourism_attraction_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourism_attraction_1.addFeatures(features_tourism_attraction_1);
var lyr_tourism_attraction_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tourism_attraction_1, 
                style: style_tourism_attraction_1,
                popuplayertitle: 'tourism_attraction',
                interactive: true,
                title: '<img src="styles/legend/tourism_attraction_1.png" /> tourism_attraction'
            });
var format_tourism_attraction_full_2 = new ol.format.GeoJSON();
var features_tourism_attraction_full_2 = format_tourism_attraction_full_2.readFeatures(json_tourism_attraction_full_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tourism_attraction_full_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourism_attraction_full_2.addFeatures(features_tourism_attraction_full_2);
var lyr_tourism_attraction_full_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tourism_attraction_full_2, 
                style: style_tourism_attraction_full_2,
                popuplayertitle: 'tourism_attraction_full',
                interactive: true,
                title: '<img src="styles/legend/tourism_attraction_full_2.png" /> tourism_attraction_full'
            });
var format_AusFacebook_3 = new ol.format.GeoJSON();
var features_AusFacebook_3 = format_AusFacebook_3.readFeatures(json_AusFacebook_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AusFacebook_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AusFacebook_3.addFeatures(features_AusFacebook_3);
var lyr_AusFacebook_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AusFacebook_3, 
                style: style_AusFacebook_3,
                popuplayertitle: 'AusFacebook',
                interactive: true,
                title: '<img src="styles/legend/AusFacebook_3.png" /> AusFacebook'
            });
var format_Attr_manual_4 = new ol.format.GeoJSON();
var features_Attr_manual_4 = format_Attr_manual_4.readFeatures(json_Attr_manual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Attr_manual_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Attr_manual_4.addFeatures(features_Attr_manual_4);
var lyr_Attr_manual_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Attr_manual_4, 
                style: style_Attr_manual_4,
                popuplayertitle: 'Attr_manual',
                interactive: true,
                title: '<img src="styles/legend/Attr_manual_4.png" /> Attr_manual'
            });
var format_Viewpoints_5 = new ol.format.GeoJSON();
var features_Viewpoints_5 = format_Viewpoints_5.readFeatures(json_Viewpoints_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viewpoints_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viewpoints_5.addFeatures(features_Viewpoints_5);
var lyr_Viewpoints_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Viewpoints_5,
maxResolution:56.00893230452392,
 
                style: style_Viewpoints_5,
                popuplayertitle: 'Viewpoints',
                interactive: true,
                title: '<img src="styles/legend/Viewpoints_5.png" /> Viewpoints'
            });
var format_tourism_viewpoint_6 = new ol.format.GeoJSON();
var features_tourism_viewpoint_6 = format_tourism_viewpoint_6.readFeatures(json_tourism_viewpoint_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tourism_viewpoint_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourism_viewpoint_6.addFeatures(features_tourism_viewpoint_6);
var lyr_tourism_viewpoint_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tourism_viewpoint_6, 
                style: style_tourism_viewpoint_6,
                popuplayertitle: 'tourism_viewpoint',
                interactive: true,
                title: '<img src="styles/legend/tourism_viewpoint_6.png" /> tourism_viewpoint'
            });
var format_Verena_Tspots_7 = new ol.format.GeoJSON();
var features_Verena_Tspots_7 = format_Verena_Tspots_7.readFeatures(json_Verena_Tspots_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verena_Tspots_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verena_Tspots_7.addFeatures(features_Verena_Tspots_7);
var lyr_Verena_Tspots_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verena_Tspots_7,
maxResolution:2800.4466152261966,
 
                style: style_Verena_Tspots_7,
                popuplayertitle: 'Verena_Tspots',
                interactive: true,
                title: '<img src="styles/legend/Verena_Tspots_7.png" /> Verena_Tspots'
            });
var format_South_Route_27200_8 = new ol.format.GeoJSON();
var features_South_Route_27200_8 = format_South_Route_27200_8.readFeatures(json_South_Route_27200_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_South_Route_27200_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_South_Route_27200_8.addFeatures(features_South_Route_27200_8);
var lyr_South_Route_27200_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_South_Route_27200_8, 
                style: style_South_Route_27200_8,
                popuplayertitle: 'South_Route_27200',
                interactive: true,
                title: '<img src="styles/legend/South_Route_27200_8.png" /> South_Route_27200'
            });
var format_Northland_Route_27200_9 = new ol.format.GeoJSON();
var features_Northland_Route_27200_9 = format_Northland_Route_27200_9.readFeatures(json_Northland_Route_27200_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Northland_Route_27200_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Northland_Route_27200_9.addFeatures(features_Northland_Route_27200_9);
var lyr_Northland_Route_27200_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Northland_Route_27200_9, 
                style: style_Northland_Route_27200_9,
                popuplayertitle: 'Northland_Route_27200',
                interactive: true,
                title: '<img src="styles/legend/Northland_Route_27200_9.png" /> Northland_Route_27200'
            });
var format_50kmPunkterck_10 = new ol.format.GeoJSON();
var features_50kmPunkterck_10 = format_50kmPunkterck_10.readFeatures(json_50kmPunkterck_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_50kmPunkterck_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_50kmPunkterck_10.addFeatures(features_50kmPunkterck_10);
var lyr_50kmPunkterck_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_50kmPunkterck_10, 
                style: style_50kmPunkterck_10,
                popuplayertitle: '50 km Punkte rück',
                interactive: true,
                title: '<img src="styles/legend/50kmPunkterck_10.png" /> 50 km Punkte rück'
            });
var format_50kmPunktehin_11 = new ol.format.GeoJSON();
var features_50kmPunktehin_11 = format_50kmPunktehin_11.readFeatures(json_50kmPunktehin_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_50kmPunktehin_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_50kmPunktehin_11.addFeatures(features_50kmPunktehin_11);
var lyr_50kmPunktehin_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_50kmPunktehin_11, 
                style: style_50kmPunktehin_11,
                popuplayertitle: '50 km Punkte hin',
                interactive: true,
                title: '<img src="styles/legend/50kmPunktehin_11.png" /> 50 km Punkte hin'
            });
var format_50kmPunkte_South_12 = new ol.format.GeoJSON();
var features_50kmPunkte_South_12 = format_50kmPunkte_South_12.readFeatures(json_50kmPunkte_South_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_50kmPunkte_South_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_50kmPunkte_South_12.addFeatures(features_50kmPunkte_South_12);
var lyr_50kmPunkte_South_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_50kmPunkte_South_12, 
                style: style_50kmPunkte_South_12,
                popuplayertitle: '50 km Punkte_South',
                interactive: true,
                title: '<img src="styles/legend/50kmPunkte_South_12.png" /> 50 km Punkte_South'
            });
var format_Favorites_13 = new ol.format.GeoJSON();
var features_Favorites_13 = format_Favorites_13.readFeatures(json_Favorites_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Favorites_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Favorites_13.addFeatures(features_Favorites_13);
var lyr_Favorites_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Favorites_13, 
                style: style_Favorites_13,
                popuplayertitle: 'Favorites',
                interactive: true,
                title: '<img src="styles/legend/Favorites_13.png" /> Favorites'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_tourism_attraction_1.setVisible(true);lyr_tourism_attraction_full_2.setVisible(true);lyr_AusFacebook_3.setVisible(true);lyr_Attr_manual_4.setVisible(true);lyr_Viewpoints_5.setVisible(true);lyr_tourism_viewpoint_6.setVisible(true);lyr_Verena_Tspots_7.setVisible(true);lyr_South_Route_27200_8.setVisible(true);lyr_Northland_Route_27200_9.setVisible(true);lyr_50kmPunkterck_10.setVisible(true);lyr_50kmPunktehin_11.setVisible(true);lyr_50kmPunkte_South_12.setVisible(true);lyr_Favorites_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_tourism_attraction_1,lyr_tourism_attraction_full_2,lyr_AusFacebook_3,lyr_Attr_manual_4,lyr_Viewpoints_5,lyr_tourism_viewpoint_6,lyr_Verena_Tspots_7,lyr_South_Route_27200_8,lyr_Northland_Route_27200_9,lyr_50kmPunkterck_10,lyr_50kmPunktehin_11,lyr_50kmPunkte_South_12,lyr_Favorites_13];
lyr_tourism_attraction_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'barrier': 'barrier', 'bridge': 'bridge', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'width': 'width', 'wheelchair': 'wheelchair', 'tunnel': 'tunnel', 'surface': 'surface', 'name_mi': 'name_mi', 'name_en': 'name_en', 'name': 'name', 'lit': 'lit', 'layer': 'layer', 'highway': 'highway', });
lyr_tourism_attraction_full_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'barrier': 'barrier', 'ele': 'ele', 'contact_ph': 'contact_ph', 'contact_in': 'contact_in', 'ref_linz_h': 'ref_linz_h', 'seamark_ty': 'seamark_ty', 'seamark_na': 'seamark_na', 'genus': 'genus', 'ruins': 'ruins', 'boat_tours': 'boat_tours', 'scuba_divi': 'scuba_divi', 'operator': 'operator', 'not_natura': 'not_natura', 'reservatio': 'reservatio', 'species_wi': 'species_wi', 'species__1': 'species__1', 'leaf_type': 'leaf_type', 'wheelchair': 'wheelchair', 'name_fr': 'name_fr', 'phone_NZ': 'phone_NZ', 'mobile': 'mobile', 'contact_fa': 'contact_fa', 'entrance': 'entrance', 'name_nl': 'name_nl', 'sport': 'sport', 'club': 'club', 'historic_c': 'historic_c', 'archaeolog': 'archaeolog', 'name_de': 'name_de', 'name_ja': 'name_ja', 'email': 'email', 'phone': 'phone', 'addr_hamle': 'addr_hamle', 'name_simpl': 'name_simpl', 'craft': 'craft', 'fee': 'fee', 'access': 'access', 'source_ref': 'source_ref', 'attributio': 'attributio', 'LINZ_sourc': 'LINZ_sourc', 'LINZ_layer': 'LINZ_layer', 'direction': 'direction', 'man_made': 'man_made', 'name_etymo': 'name_etymo', 'alt_name_c': 'alt_name_c', 'alt_name': 'alt_name', 'amenity': 'amenity', 'url': 'url', 'website': 'website', 'ref_linz_a': 'ref_linz_a', 'opening_ho': 'opening_ho', 'addr_subur': 'addr_subur', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'wikipedia': 'wikipedia', 'name_ety_1': 'name_ety_1', 'name_en': 'name_en', 'diameter': 'diameter', 'descriptio': 'descriptio', 'denotation': 'denotation', 'species': 'species', 'name_cs': 'name_cs', 'leaf_cycle': 'leaf_cycle', 'attraction': 'attraction', 'is_in': 'is_in', 'descript_1': 'descript_1', 'ref_nz_her': 'ref_nz_her', 'historic': 'historic', 'wikidata': 'wikidata', 'waterway': 'waterway', 'ref_linz_p': 'ref_linz_p', 'name_mi': 'name_mi', 'intermitte': 'intermitte', 'height': 'height', 'natural': 'natural', 'name': 'name', 'locked': 'locked', 'place': 'place', 'source:website': 'source:website', 'backrest': 'backrest', 'seamark:name': 'seamark:name', 'boat:tours': 'boat:tours', 'reservation': 'reservation', 'geothermal': 'geothermal', 'name:ru': 'name:ru', 'model:wikipedia': 'model:wikipedia', 'model:wikidata': 'model:wikidata', 'model': 'model', 'manufacturer:wikipedia': 'manufacturer:wikipedia', 'manufacturer:wikidata': 'manufacturer:wikidata', 'manufacturer': 'manufacturer', 'aircraft:type': 'aircraft:type', 'old_name': 'old_name', 'contact:instagram': 'contact:instagram', 'contact:facebook': 'contact:facebook', 'name:fr': 'name:fr', 'climbing:url:thecrag': 'climbing:url:thecrag', 'climbing:url:openbeta': 'climbing:url:openbeta', 'name:es': 'name:es', 'addr:hamlet': 'addr:hamlet', 'historic:civilization': 'historic:civilization', 'shop': 'shop', 'note:cs': 'note:cs', 'description:en': 'description:en', 'description:cs': 'description:cs', 'archaeological_site': 'archaeological_site', 'start_date': 'start_date', 'power': 'power', 'generator:source': 'generator:source', 'generator:output:electricity': 'generator:output:electricity', 'generator:method': 'generator:method', 'frequency': 'frequency', 'ship': 'ship', 'addr:postcode': 'addr:postcode', 'religion': 'religion', 'denomination': 'denomination', 'leisure': 'leisure', 'toilets': 'toilets', 'payment:cash': 'payment:cash', 'check_date': 'check_date', 'service_times': 'service_times', 'ref:linz:topo50_id': 'ref:linz:topo50_id', 'attribution': 'attribution', 'LINZ:source_version': 'LINZ:source_version', 'LINZ:layer': 'LINZ:layer', 'temperature': 'temperature', 'railway': 'railway', 'crossing:light': 'crossing:light', 'crossing:bell': 'crossing:bell', 'crossing:barrier': 'crossing:barrier', 'crossing:aircraft': 'crossing:aircraft', 'aeroway': 'aeroway', 'wreck:visible_at_low_tide': 'wreck:visible_at_low_tide', 'wreck:visible_at_high_tide': 'wreck:visible_at_high_tide', 'wreck:type': 'wreck:type', 'wreck:date_sunk': 'wreck:date_sunk', 'source:date': 'source:date', 'seamark:wreck:water_level': 'seamark:wreck:water_level', 'seamark:wreck:category': 'seamark:wreck:category', 'seamark:type': 'seamark:type', 'ref:linz:hydrographic_id': 'ref:linz:hydrographic_id', 'image': 'image', 'ref:linz:place_id': 'ref:linz:place_id', 'name:mi': 'name:mi', 'name:en': 'name:en', 'drinking_water': 'drinking_water', 'description': 'description', 'name:ja': 'name:ja', 'fax': 'fax', 'contact:email': 'contact:email', 'addr:city': 'addr:city', 'name:de': 'name:de', 'ref:linz:address_id': 'ref:linz:address_id', 'phone:NZ': 'phone:NZ', 'name:zh': 'name:zh', 'addr:suburb': 'addr:suburb', 'opening_hours': 'opening_hours', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'layer': 'layer', 'path': 'path', });
lyr_AusFacebook_3.set('fieldAliases', {'address': 'address', 'country': 'country', 'descriptio': 'descriptio', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', 'display_20': 'display_20', });
lyr_Attr_manual_4.set('fieldAliases', {'id': 'id', 'name': 'name', 'desc': 'desc', });
lyr_Viewpoints_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'locked': 'locked', 'barrier': 'barrier', 'material': 'material', 'access': 'access', 'name_etymo': 'name_etymo', 'ruins': 'ruins', 'name_cs': 'name_cs', 'alt_name_e': 'alt_name_e', 'alt_name_c': 'alt_name_c', 'alt_name': 'alt_name', 'amenity': 'amenity', 'opening_ho': 'opening_ho', 'name_fr': 'name_fr', 'name_de': 'name_de', 'image': 'image', 'website': 'website', 'name_en': 'name_en', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'name_zh': 'name_zh', 'historic': 'historic', 'fortificat': 'fortificat', 'archaeolog': 'archaeolog', 'covered': 'covered', 'level': 'level', 'designatio': 'designatio', 'name_mk': 'name_mk', 'name_ja': 'name_ja', 'height': 'height', 'layer': 'layer', 'noexit': 'noexit', 'foot': 'foot', 'direction': 'direction', 'seamark_ty': 'seamark_ty', 'seamark_li': 'seamark_li', 'seamark__1': 'seamark__1', 'seamark__2': 'seamark__2', 'seamark__3': 'seamark__3', 'seamark__4': 'seamark__4', 'ref_linz_h': 'ref_linz_h', 'descriptio': 'descriptio', 'wheelchair': 'wheelchair', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'ref_linz_t': 'ref_linz_t', 'ref_linz_p': 'ref_linz_p', 'natural': 'natural', 'name_mi': 'name_mi', 'name': 'name', 'ele': 'ele', 'not:natural': 'not:natural', 'name:cs': 'name:cs', 'source:name:mi': 'source:name:mi', 'name:mi': 'name:mi', 'opening_hours': 'opening_hours', 'is_in': 'is_in', 'ref:linz:topo50_id': 'ref:linz:topo50_id', 'name:fr': 'name:fr', 'name:de': 'name:de', 'backrest': 'backrest', 'ref': 'ref', 'ref:linz:place_id': 'ref:linz:place_id', 'waterway': 'waterway', 'designation': 'designation', 'description': 'description', 'name:en': 'name:en', 'path': 'path', });
lyr_tourism_viewpoint_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'surface': 'surface', 'lit': 'lit', 'bridge': 'bridge', 'tower_type': 'tower_type', 'roof_shape': 'roof_shape', 'roof_level': 'roof_level', 'name': 'name', 'building': 'building', 'wheelchair': 'wheelchair', 'type': 'type', 'roof_colou': 'roof_colou', 'min_height': 'min_height', 'man_made': 'man_made', 'layer': 'layer', 'height': 'height', 'descriptio': 'descriptio', 'building_p': 'building_p', 'building_m': 'building_m', 'building_l': 'building_l', 'building_c': 'building_c', 'balcony': 'balcony', 'access': 'access', });
lyr_Verena_Tspots_7.set('fieldAliases', {'Titel': 'Titel', 'country': 'country', 'Notiz': 'Notiz', 'URL': 'URL', 'Lattitude': 'Lattitude', 'Longitude': 'Longitude', 'Tags': 'Tags', 'Kommentar': 'Kommentar', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_South_Route_27200_8.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_Northland_Route_27200_9.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_50kmPunkterck_10.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'distance': 'distance', 'angle': 'angle', });
lyr_50kmPunktehin_11.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'distance': 'distance', 'angle': 'angle', });
lyr_50kmPunkte_South_12.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'distance': 'distance', 'angle': 'angle', });
lyr_Favorites_13.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'description': 'description', 'Titel': 'Titel', });
lyr_tourism_attraction_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'tourism': 'TextEdit', 'barrier': 'TextEdit', 'bridge': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'width': 'TextEdit', 'wheelchair': 'TextEdit', 'tunnel': 'TextEdit', 'surface': 'TextEdit', 'name_mi': '', 'name_en': '', 'name': 'TextEdit', 'lit': 'TextEdit', 'layer': 'TextEdit', 'highway': 'TextEdit', });
lyr_tourism_attraction_full_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'tourism': 'TextEdit', 'barrier': 'TextEdit', 'ele': 'TextEdit', 'contact_ph': 'TextEdit', 'contact_in': 'TextEdit', 'ref_linz_h': 'TextEdit', 'seamark_ty': 'TextEdit', 'seamark_na': 'TextEdit', 'genus': 'TextEdit', 'ruins': 'TextEdit', 'boat_tours': 'TextEdit', 'scuba_divi': 'TextEdit', 'operator': 'TextEdit', 'not_natura': 'TextEdit', 'reservatio': 'TextEdit', 'species_wi': 'TextEdit', 'species__1': 'TextEdit', 'leaf_type': 'TextEdit', 'wheelchair': 'TextEdit', 'name_fr': 'TextEdit', 'phone_NZ': 'TextEdit', 'mobile': 'TextEdit', 'contact_fa': 'TextEdit', 'entrance': 'TextEdit', 'name_nl': 'TextEdit', 'sport': 'TextEdit', 'club': 'TextEdit', 'historic_c': 'TextEdit', 'archaeolog': 'TextEdit', 'name_de': 'TextEdit', 'name_ja': 'TextEdit', 'email': 'TextEdit', 'phone': 'TextEdit', 'addr_hamle': 'TextEdit', 'name_simpl': 'TextEdit', 'craft': 'TextEdit', 'fee': 'TextEdit', 'access': 'TextEdit', 'source_ref': 'TextEdit', 'attributio': 'TextEdit', 'LINZ_sourc': 'TextEdit', 'LINZ_layer': 'TextEdit', 'direction': 'TextEdit', 'man_made': 'TextEdit', 'name_etymo': 'TextEdit', 'alt_name_c': 'TextEdit', 'alt_name': 'TextEdit', 'amenity': 'TextEdit', 'url': 'TextEdit', 'website': 'TextEdit', 'ref_linz_a': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_subur': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'wikipedia': 'TextEdit', 'name_ety_1': 'TextEdit', 'name_en': 'TextEdit', 'diameter': 'TextEdit', 'descriptio': 'TextEdit', 'denotation': 'TextEdit', 'species': 'TextEdit', 'name_cs': 'TextEdit', 'leaf_cycle': 'TextEdit', 'attraction': 'TextEdit', 'is_in': 'TextEdit', 'descript_1': 'TextEdit', 'ref_nz_her': 'TextEdit', 'historic': 'TextEdit', 'wikidata': 'TextEdit', 'waterway': 'TextEdit', 'ref_linz_p': 'TextEdit', 'name_mi': 'TextEdit', 'intermitte': 'TextEdit', 'height': 'TextEdit', 'natural': 'TextEdit', 'name': 'TextEdit', 'locked': 'TextEdit', 'place': 'TextEdit', 'source:website': 'TextEdit', 'backrest': 'TextEdit', 'seamark:name': 'TextEdit', 'boat:tours': 'TextEdit', 'reservation': 'TextEdit', 'geothermal': 'TextEdit', 'name:ru': 'TextEdit', 'model:wikipedia': 'TextEdit', 'model:wikidata': 'TextEdit', 'model': 'TextEdit', 'manufacturer:wikipedia': 'TextEdit', 'manufacturer:wikidata': 'TextEdit', 'manufacturer': 'TextEdit', 'aircraft:type': 'TextEdit', 'old_name': 'TextEdit', 'contact:instagram': 'TextEdit', 'contact:facebook': 'TextEdit', 'name:fr': 'TextEdit', 'climbing:url:thecrag': 'TextEdit', 'climbing:url:openbeta': 'TextEdit', 'name:es': 'TextEdit', 'addr:hamlet': 'TextEdit', 'historic:civilization': 'TextEdit', 'shop': 'TextEdit', 'note:cs': 'TextEdit', 'description:en': 'TextEdit', 'description:cs': 'TextEdit', 'archaeological_site': 'TextEdit', 'start_date': 'TextEdit', 'power': 'TextEdit', 'generator:source': 'TextEdit', 'generator:output:electricity': 'TextEdit', 'generator:method': 'TextEdit', 'frequency': 'TextEdit', 'ship': 'TextEdit', 'addr:postcode': 'TextEdit', 'religion': 'TextEdit', 'denomination': 'TextEdit', 'leisure': 'TextEdit', 'toilets': 'TextEdit', 'payment:cash': 'TextEdit', 'check_date': 'TextEdit', 'service_times': 'TextEdit', 'ref:linz:topo50_id': 'TextEdit', 'attribution': 'TextEdit', 'LINZ:source_version': 'TextEdit', 'LINZ:layer': 'TextEdit', 'temperature': 'TextEdit', 'railway': 'TextEdit', 'crossing:light': 'TextEdit', 'crossing:bell': 'TextEdit', 'crossing:barrier': 'TextEdit', 'crossing:aircraft': 'TextEdit', 'aeroway': 'TextEdit', 'wreck:visible_at_low_tide': 'TextEdit', 'wreck:visible_at_high_tide': 'TextEdit', 'wreck:type': 'TextEdit', 'wreck:date_sunk': 'TextEdit', 'source:date': 'TextEdit', 'seamark:wreck:water_level': 'TextEdit', 'seamark:wreck:category': 'TextEdit', 'seamark:type': 'TextEdit', 'ref:linz:hydrographic_id': 'TextEdit', 'image': 'TextEdit', 'ref:linz:place_id': 'TextEdit', 'name:mi': 'TextEdit', 'name:en': 'TextEdit', 'drinking_water': 'TextEdit', 'description': 'TextEdit', 'name:ja': 'TextEdit', 'fax': 'TextEdit', 'contact:email': 'TextEdit', 'addr:city': 'TextEdit', 'name:de': 'TextEdit', 'ref:linz:address_id': 'TextEdit', 'phone:NZ': 'TextEdit', 'name:zh': 'TextEdit', 'addr:suburb': 'TextEdit', 'opening_hours': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_AusFacebook_3.set('fieldImages', {'address': 'TextEdit', 'country': 'TextEdit', 'descriptio': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', 'display_20': 'TextEdit', });
lyr_Attr_manual_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'desc': 'TextEdit', });
lyr_Viewpoints_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'tourism': 'TextEdit', 'locked': 'TextEdit', 'barrier': 'TextEdit', 'material': 'TextEdit', 'access': 'TextEdit', 'name_etymo': 'TextEdit', 'ruins': 'TextEdit', 'name_cs': 'TextEdit', 'alt_name_e': 'TextEdit', 'alt_name_c': 'TextEdit', 'alt_name': 'TextEdit', 'amenity': 'TextEdit', 'opening_ho': 'TextEdit', 'name_fr': 'TextEdit', 'name_de': 'TextEdit', 'image': 'TextEdit', 'website': 'TextEdit', 'name_en': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_count': 'TextEdit', 'addr_city': 'TextEdit', 'name_zh': 'TextEdit', 'historic': 'TextEdit', 'fortificat': 'TextEdit', 'archaeolog': 'TextEdit', 'covered': 'TextEdit', 'level': 'TextEdit', 'designatio': 'TextEdit', 'name_mk': 'TextEdit', 'name_ja': 'TextEdit', 'height': 'TextEdit', 'layer': 'TextEdit', 'noexit': 'TextEdit', 'foot': 'TextEdit', 'direction': 'TextEdit', 'seamark_ty': 'TextEdit', 'seamark_li': 'TextEdit', 'seamark__1': 'TextEdit', 'seamark__2': 'TextEdit', 'seamark__3': 'TextEdit', 'seamark__4': 'TextEdit', 'ref_linz_h': 'TextEdit', 'descriptio': 'TextEdit', 'wheelchair': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'ref_linz_t': 'TextEdit', 'ref_linz_p': 'TextEdit', 'natural': 'TextEdit', 'name_mi': 'TextEdit', 'name': 'TextEdit', 'ele': 'TextEdit', 'not:natural': 'TextEdit', 'name:cs': 'TextEdit', 'source:name:mi': 'TextEdit', 'name:mi': 'TextEdit', 'opening_hours': 'TextEdit', 'is_in': 'TextEdit', 'ref:linz:topo50_id': 'TextEdit', 'name:fr': 'TextEdit', 'name:de': 'TextEdit', 'backrest': 'TextEdit', 'ref': 'TextEdit', 'ref:linz:place_id': 'TextEdit', 'waterway': 'TextEdit', 'designation': 'TextEdit', 'description': 'TextEdit', 'name:en': 'TextEdit', 'path': 'TextEdit', });
lyr_tourism_viewpoint_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'tourism': '', 'surface': '', 'lit': '', 'bridge': '', 'tower_type': '', 'roof_shape': '', 'roof_level': '', 'name': '', 'building': '', 'wheelchair': '', 'type': '', 'roof_colou': '', 'min_height': '', 'man_made': '', 'layer': '', 'height': '', 'descriptio': '', 'building_p': '', 'building_m': '', 'building_l': '', 'building_c': '', 'balcony': '', 'access': '', });
lyr_Verena_Tspots_7.set('fieldImages', {'Titel': 'TextEdit', 'country': 'TextEdit', 'Notiz': 'TextEdit', 'URL': 'TextEdit', 'Lattitude': 'TextEdit', 'Longitude': 'TextEdit', 'Tags': 'TextEdit', 'Kommentar': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_South_Route_27200_8.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_Northland_Route_27200_9.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_50kmPunkterck_10.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'distance': 'TextEdit', 'angle': 'TextEdit', });
lyr_50kmPunktehin_11.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'distance': 'TextEdit', 'angle': 'TextEdit', });
lyr_50kmPunkte_South_12.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'distance': 'TextEdit', 'angle': 'TextEdit', });
lyr_Favorites_13.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'Titel': 'TextEdit', });
lyr_tourism_attraction_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'barrier': 'no label', 'bridge': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'width': 'no label', 'wheelchair': 'no label', 'tunnel': 'no label', 'surface': 'no label', 'name_mi': 'no label', 'name_en': 'no label', 'name': 'no label', 'lit': 'no label', 'layer': 'no label', 'highway': 'no label', });
lyr_tourism_attraction_full_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'barrier': 'no label', 'ele': 'no label', 'contact_ph': 'no label', 'contact_in': 'no label', 'ref_linz_h': 'no label', 'seamark_ty': 'no label', 'seamark_na': 'no label', 'genus': 'no label', 'ruins': 'no label', 'boat_tours': 'no label', 'scuba_divi': 'no label', 'operator': 'no label', 'not_natura': 'no label', 'reservatio': 'no label', 'species_wi': 'no label', 'species__1': 'no label', 'leaf_type': 'no label', 'wheelchair': 'no label', 'name_fr': 'no label', 'phone_NZ': 'no label', 'mobile': 'no label', 'contact_fa': 'no label', 'entrance': 'no label', 'name_nl': 'no label', 'sport': 'no label', 'club': 'no label', 'historic_c': 'no label', 'archaeolog': 'no label', 'name_de': 'no label', 'name_ja': 'no label', 'email': 'no label', 'phone': 'no label', 'addr_hamle': 'no label', 'name_simpl': 'no label', 'craft': 'no label', 'fee': 'no label', 'access': 'no label', 'source_ref': 'no label', 'attributio': 'no label', 'LINZ_sourc': 'no label', 'LINZ_layer': 'no label', 'direction': 'no label', 'man_made': 'no label', 'name_etymo': 'no label', 'alt_name_c': 'no label', 'alt_name': 'no label', 'amenity': 'no label', 'url': 'no label', 'website': 'no label', 'ref_linz_a': 'no label', 'opening_ho': 'no label', 'addr_subur': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', 'wikipedia': 'no label', 'name_ety_1': 'no label', 'name_en': 'no label', 'diameter': 'no label', 'descriptio': 'no label', 'denotation': 'no label', 'species': 'no label', 'name_cs': 'no label', 'leaf_cycle': 'no label', 'attraction': 'no label', 'is_in': 'no label', 'descript_1': 'no label', 'ref_nz_her': 'no label', 'historic': 'no label', 'wikidata': 'no label', 'waterway': 'no label', 'ref_linz_p': 'no label', 'name_mi': 'no label', 'intermitte': 'no label', 'height': 'no label', 'natural': 'no label', 'name': 'no label', 'locked': 'no label', 'place': 'no label', 'source:website': 'no label', 'backrest': 'no label', 'seamark:name': 'no label', 'boat:tours': 'no label', 'reservation': 'no label', 'geothermal': 'no label', 'name:ru': 'no label', 'model:wikipedia': 'no label', 'model:wikidata': 'no label', 'model': 'no label', 'manufacturer:wikipedia': 'no label', 'manufacturer:wikidata': 'no label', 'manufacturer': 'no label', 'aircraft:type': 'no label', 'old_name': 'no label', 'contact:instagram': 'no label', 'contact:facebook': 'no label', 'name:fr': 'no label', 'climbing:url:thecrag': 'no label', 'climbing:url:openbeta': 'no label', 'name:es': 'no label', 'addr:hamlet': 'no label', 'historic:civilization': 'no label', 'shop': 'no label', 'note:cs': 'no label', 'description:en': 'no label', 'description:cs': 'no label', 'archaeological_site': 'no label', 'start_date': 'no label', 'power': 'no label', 'generator:source': 'no label', 'generator:output:electricity': 'no label', 'generator:method': 'no label', 'frequency': 'no label', 'ship': 'no label', 'addr:postcode': 'no label', 'religion': 'no label', 'denomination': 'no label', 'leisure': 'no label', 'toilets': 'no label', 'payment:cash': 'no label', 'check_date': 'no label', 'service_times': 'no label', 'ref:linz:topo50_id': 'no label', 'attribution': 'no label', 'LINZ:source_version': 'no label', 'LINZ:layer': 'no label', 'temperature': 'no label', 'railway': 'no label', 'crossing:light': 'no label', 'crossing:bell': 'no label', 'crossing:barrier': 'no label', 'crossing:aircraft': 'no label', 'aeroway': 'no label', 'wreck:visible_at_low_tide': 'no label', 'wreck:visible_at_high_tide': 'no label', 'wreck:type': 'no label', 'wreck:date_sunk': 'no label', 'source:date': 'no label', 'seamark:wreck:water_level': 'no label', 'seamark:wreck:category': 'no label', 'seamark:type': 'no label', 'ref:linz:hydrographic_id': 'no label', 'image': 'no label', 'ref:linz:place_id': 'no label', 'name:mi': 'no label', 'name:en': 'no label', 'drinking_water': 'no label', 'description': 'no label', 'name:ja': 'no label', 'fax': 'no label', 'contact:email': 'no label', 'addr:city': 'no label', 'name:de': 'no label', 'ref:linz:address_id': 'no label', 'phone:NZ': 'no label', 'name:zh': 'no label', 'addr:suburb': 'no label', 'opening_hours': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_AusFacebook_3.set('fieldLabels', {'address': 'no label', 'country': 'no label', 'descriptio': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', 'display_20': 'no label', });
lyr_Attr_manual_4.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'desc': 'no label', });
lyr_Viewpoints_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'locked': 'no label', 'barrier': 'no label', 'material': 'no label', 'access': 'no label', 'name_etymo': 'no label', 'ruins': 'no label', 'name_cs': 'no label', 'alt_name_e': 'no label', 'alt_name_c': 'no label', 'alt_name': 'no label', 'amenity': 'no label', 'opening_ho': 'no label', 'name_fr': 'no label', 'name_de': 'no label', 'image': 'no label', 'website': 'no label', 'name_en': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_count': 'no label', 'addr_city': 'no label', 'name_zh': 'no label', 'historic': 'no label', 'fortificat': 'no label', 'archaeolog': 'no label', 'covered': 'no label', 'level': 'no label', 'designatio': 'no label', 'name_mk': 'no label', 'name_ja': 'no label', 'height': 'no label', 'layer': 'no label', 'noexit': 'no label', 'foot': 'no label', 'direction': 'no label', 'seamark_ty': 'no label', 'seamark_li': 'no label', 'seamark__1': 'no label', 'seamark__2': 'no label', 'seamark__3': 'no label', 'seamark__4': 'no label', 'ref_linz_h': 'no label', 'descriptio': 'no label', 'wheelchair': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'ref_linz_t': 'no label', 'ref_linz_p': 'no label', 'natural': 'no label', 'name_mi': 'no label', 'name': 'no label', 'ele': 'no label', 'not:natural': 'no label', 'name:cs': 'no label', 'source:name:mi': 'no label', 'name:mi': 'no label', 'opening_hours': 'no label', 'is_in': 'no label', 'ref:linz:topo50_id': 'no label', 'name:fr': 'no label', 'name:de': 'no label', 'backrest': 'no label', 'ref': 'no label', 'ref:linz:place_id': 'no label', 'waterway': 'no label', 'designation': 'no label', 'description': 'no label', 'name:en': 'no label', 'path': 'no label', });
lyr_tourism_viewpoint_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'surface': 'no label', 'lit': 'no label', 'bridge': 'no label', 'tower_type': 'no label', 'roof_shape': 'no label', 'roof_level': 'no label', 'name': 'no label', 'building': 'no label', 'wheelchair': 'no label', 'type': 'no label', 'roof_colou': 'no label', 'min_height': 'no label', 'man_made': 'no label', 'layer': 'no label', 'height': 'no label', 'descriptio': 'no label', 'building_p': 'no label', 'building_m': 'no label', 'building_l': 'no label', 'building_c': 'no label', 'balcony': 'no label', 'access': 'inline label - always visible', });
lyr_Verena_Tspots_7.set('fieldLabels', {'Titel': 'no label', 'country': 'no label', 'Notiz': 'no label', 'URL': 'no label', 'Lattitude': 'no label', 'Longitude': 'no label', 'Tags': 'no label', 'Kommentar': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_South_Route_27200_8.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_Northland_Route_27200_9.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_50kmPunkterck_10.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'distance': 'no label', 'angle': 'no label', });
lyr_50kmPunktehin_11.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'distance': 'no label', 'angle': 'no label', });
lyr_50kmPunkte_South_12.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'distance': 'no label', 'angle': 'no label', });
lyr_Favorites_13.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'description': 'no label', 'Titel': 'no label', });
lyr_Favorites_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});