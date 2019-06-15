describe("Check if data is loaded: ", function() {
    it("List shows that there are items", function() {
        browser.get("http://localhost:8080/#!/ui/v1/motogp");
        var res = element.all(by.repeater("race in motogp"));
        expect(res.count()).toBeGreaterThan(0);
    });

});
