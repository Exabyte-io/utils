import fs from "fs";
import yaml from "js-yaml";

export function convertYAMLStringToJSON(YAMLString: string): object {
    return yaml.load(YAMLString);
}

export function readYAMLFile(filePath: string): object {
    const YAMLContent = fs.readFileSync(filePath, "utf8");
    return convertYAMLStringToJSON(YAMLContent);
}

export function convertJSONToYAMLString(data: object): string {
    return yaml.dump(data);
}

export function writeYAMLFile(filePath: string, data: object) {
    const YAMLContent = convertJSONToYAMLString(data);
    fs.writeFileSync(filePath, YAMLContent);
}
