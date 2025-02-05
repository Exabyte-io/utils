import { expect } from "chai";
import fs from "fs";
import path from "path";

import { readYAMLFile, writeYAMLFile } from "../../src/js/server/yaml";
import { expandTemplate } from "../../src/js/shared/str";

describe("YAML operations", () => {
    const testDir = path.join(__dirname, "fixtures");
    const testFilePath = path.join(testDir, "test.yml");

    before(() => {
        if (!fs.existsSync(testDir)) {
            fs.mkdirSync(testDir, { recursive: true });
        }
    });

    after(() => {
        // Cleanup test files
        if (fs.existsSync(testFilePath)) {
            fs.unlinkSync(testFilePath);
        }
        if (fs.existsSync(testDir)) {
            fs.rmdirSync(testDir);
        }
    });

    it("should write and read YAML files", () => {
        const testData = {
            name: "test",
            values: [1, 2, 3],
            nested: {
                key: "value",
            },
        };

        writeYAMLFile(testFilePath, testData);
        const readData = readYAMLFile(testFilePath);
        expect(readData).to.deep.equal(testData);
    });

    it("should handle empty objects", () => {
        const emptyData = {};
        writeYAMLFile(testFilePath, emptyData);
        const readData = readYAMLFile(testFilePath);
        expect(readData).to.deep.equal(emptyData);
    });

    it("should throw error when reading non-existent file", () => {
        const nonExistentPath = path.join(testDir, "nonexistent.yml");
        expect(() => readYAMLFile(nonExistentPath)).to.throw();
    });
});

/* eslint-disable no-template-curly-in-string */
describe("Test feature template expansion", () => {
    it("should expand test feature template with variables", () => {
        const template = "As a ${role}, I want to ${action}.";
        const context = {
            role: "User",
            action: "generate test cases automatically",
        };
        const expected = "As a User, I want to generate test cases automatically.";
        expect(expandTemplate(template, context)).to.equal(expected);
    });

    it("should handle missing test feature variables", () => {
        const template = "Given ${precondition}, when ${action}, then ${result}";
        const context = {
            precondition: "the system is configured",
            action: "I run the test generator",
        };
        const expected =
            "Given the system is configured, when I run the test generator, then ${result}";
        expect(expandTemplate(template, context)).to.equal(expected);
    });

    it("should handle empty test context", () => {
        const template = "Test Scenario: ${scenario_name}";
        const context = {};
        expect(expandTemplate(template, context)).to.equal("Test Scenario: ${scenario_name}");
    });

    it("should handle test template without variables", () => {
        const template = "No variables";
        const context = { scenario_name: "No variables" };
        expect(expandTemplate(template, context)).to.equal("No variables");
    });
});
